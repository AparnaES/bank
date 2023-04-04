import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicedataService } from '../Servicefolder/servicedata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno:any
  user: any
  cdate:any
  // acnum:any
  // pwd:any
  // dpamt:any
  // acnum2:any
  // pwd2:any
  // wamt:any

  constructor(private ds: ServicedataService, private fb: FormBuilder, private rout: Router) {
    this.user = localStorage.getItem("currentUser")
    this.cdate=new Date


  }
  
  //onint work right after the constructor.
  ngOnInit():void{  //request for exited page - ask for login
    if (!localStorage.getItem("currentAcnum")) {
      alert('Please login')
      this.rout.navigateByUrl("") //login page
    }
  }

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    damt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  withdrawForm = this.fb.group({
    acno2: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pwd2: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    wamt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  deposit() {
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.pwd
    var amt = this.depositForm.value.damt
    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, psw, amt).subscribe((result:any)=>{
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      }
      )
      // if (result) {
      //   alert(`Your Account have been credited with amount ${amt} And The Available Balance is ${result}`)
      // } else {
      //   alert("Incorrect Account Number or password ")
      // }
    } else {
      alert('Invalid Form')
    }
    //if condition if not false then all are true

  }
  Withdraw() {
    var ac = this.withdrawForm.value.acno2
    var p = this.withdrawForm.value.pwd2
    var amt = this.withdrawForm.value.wamt
    if (this.withdrawForm.valid) {
      const result = this.ds.Withdraw(ac, p, amt).subscribe((result:any)=>{
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      }
      )
      // if (result) {
      //   alert(`Your Account have been Debited with amount ${amt} And The Available Balance is ${result}`)
      // } else {
      //   alert("Incorrect Account Number or password ")
      // }
    } else {
      alert('Invalid Form')

    }

  }
  logout() {
    localStorage.removeItem("currentuser")
    localStorage.removeItem("currentAcnum")
    this.rout.navigateByUrl("") //login page
  }
  deleteAcc(){
    this.acno=JSON.parse(localStorage.getItem("currentAcnum") || "") 
  }
  cancelChild(){
    this.acno=""

  }

ondeleteAcc(event:any){
  this.ds.deleteAcc(event).subscribe((result:any)=>{
    alert( result.message)
    this.logout()
  })
}

}

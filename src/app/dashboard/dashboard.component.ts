import { Component } from '@angular/core';
import { ServicedataService } from '../Servicefolder/servicedata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any
  acnum:any
  pwd:any
  dpamt:any
  acnum2:any
  pwd2:any
  wamt:any

  constructor(private ds: ServicedataService) {
    this.user = this.ds.currentUser
  }
  deposit(){
    var ac =this.acnum
    var p=this.pwd
    var amt=this.dpamt
    //if condition if not false then all are true
    const result=this.ds.deposit(ac,p,amt)
    if (result) {
      alert(`Your Account have been credited with amount ${amt} And The Available Balance is ${result}`)
    } else {
      alert("Incorrect Account Number or password ")
    }
  }
  Withdraw(){
    var ac =this.acnum2
    var p=this.pwd2
    var amt=this.wamt
    const result=this.ds.Withdraw(ac,p,amt)
    if (result) {
      alert(`Your Account have been Debited with amount ${amt} And The Available Balance is ${result}`)
    } else {
      alert("Incorrect Account Number or password ")
    }
  }

}

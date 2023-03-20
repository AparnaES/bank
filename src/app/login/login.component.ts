import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicedataService } from '../Servicefolder/servicedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Perfect banking Partner"
  d2="Enter Ac Number"

  // userDetails:any = {
  //   1000: { username: "anu", acno: 1000, password: "abc123", balance: 0 },
  //   1001: { username: "manu", acno: 1001, password: "def123", balance: 0 }, 
  //   1002: { username: "jinu", acno: 1002, password: "ghi123", balance: 0 },
  //   1003: { username: "sanu", acno: 1003, password: "jkl123", balance:0 }

  // }
  constructor(private rout:Router,private ds:ServicedataService,private fb:FormBuilder ){
  }
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
   psword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })
  login(){
    var acnum=this.loginForm.value.acno
    var psw=this.loginForm.value.psword
    // var userdata=this.ds.userDetails
    if (this.loginForm.valid) {
      const result=this.ds.login(acnum,psw)
      // alert("login succes")
      if (result) {
        alert("Login success")
        this.rout.navigateByUrl("dashboard")
  
      } else {
        alert("Incorrect Account number! OR Incorrect Password!")
      }
    } else {
      alert("Invalid form")
    }
   
        //redirection
      } 

  

//   // acnoChange(event:any){
//   //   this.acno=event.target.value
    
//   // }
//   // passwordChange(event:any){
//   //   this.psword=event.target.value
    
//   // }
//template rendering variable method
// login(acno:any,pw:any){
//   var acnum=acno.value
//   var psw=pw.value
//   var userdata=this.userDetails
//   // alert("login succes")
//   if (acnum in userdata) {
//     if (psw == userdata[acnum]["password"]) {
//       alert("Login success")
//     } else {
//       alert("Incorrect Password!")
//     }
//   } else {
//     alert('Incorrect Account number!')
//   }

// }
}

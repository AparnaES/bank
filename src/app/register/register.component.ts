import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicedataService } from '../Servicefolder/servicedata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private ds:ServicedataService, private rout:Router, private fb:FormBuilder){}

  //model for registeration form
  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]]
  })
  register() {
var acno=this.registerForm.value.acno
var psw=this.registerForm.value.pswd
var uname=this.registerForm.value.uname
if (this.registerForm.valid) {
  this.ds.register(acno,uname,psw).subscribe((result:any)=>{
    alert(result.message)
    this.rout.navigateByUrl("")  //loginpage

  },
  result=>{
    alert(result.error.message)
  }
  )
}
else {
    alert("Invalid Form")
  }
// if (result) {
//   alert("Registration Successfull")
//   this.rout.navigateByUrl("")  //loginpage
// } else {
//   alert("User already present")
// }
// } else {
//   alert("Invalid Form")
// }

  }
}

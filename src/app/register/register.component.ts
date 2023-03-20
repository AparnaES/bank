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
var ac=this.registerForm.value.acno
var ps=this.registerForm.value.pswd
var un=this.registerForm.value.uname
if (this.registerForm.valid) {
  const result =this.ds.register(ac,un,ps)
if (result) {
  alert("Registration Successfull")
  this.rout.navigateByUrl("")  //loginpage
} else {
  alert("User already present")
}
} else {
  alert("Invalid Form")
}

  }
}

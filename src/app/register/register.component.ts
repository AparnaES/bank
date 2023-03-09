import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedataService } from '../Servicefolder/servicedata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ac: any
  ps: any
  un: any
  constructor(private ds:ServicedataService, private rout:Router){}
  register() {
var ac=this.ac
var ps=this.ps
var un=this.un

const result =this.ds.register(ac,un,ps)
if (result) {
  alert("Registration Successfull")
  this.rout.navigateByUrl("")  //loginpage
} else {
  alert("User already present")
}
  }
}

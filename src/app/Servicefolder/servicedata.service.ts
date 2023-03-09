import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
  currentUser:any
  userDetails:any = {
    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0 },
    1001: { username: "manu", acno: 1001, password: "def123", balance: 0 }, 
    1002: { username: "jinu", acno: 1002, password: "ghi123", balance: 0 },
    1003: { username: "sanu", acno: 1003, password: "jkl123", balance:0 }

  }
  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if (acno in userDetails) {
      return false
    } else {
      userDetails[acno]={username:uname,acno,password:psw,balance:0}
      console.log(userDetails);
      
      return true
    }
  }
  login(acno:any,psword:any){
    var userDetails=this.userDetails
    if (acno in userDetails) {
      if (psword ==userDetails[acno]["password"]) {
        //store username if loginsucces
        this.currentUser=userDetails[acno]["username"]
        return true
      } else {
        return false
      }
    } else {
      return false
    }

  }

  constructor() { }
}

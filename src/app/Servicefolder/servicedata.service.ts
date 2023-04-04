import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//create a global headers
const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class ServicedataService {
  currentUser: any
  currentAcnum: any
  userDetails: any
  // userDetails: any = {
  //   1000: { username: "anu", acno: 1000, password: "abc123", balance: 0, transaction: [] },
  //   1001: { username: "manu", acno: 1001, password: "def123", balance: 0, transaction: [] },
  //   1002: { username: "jinu", acno: 1002, password: "ghi123", balance: 0, transaction: [] },
  //   1003: { username: "sanu", acno: 1003, password: "jkl123", balance: 0, transaction: [] }

  // }
  constructor(private http:HttpClient) {
    // this.getDetails()  //invoke when contructor work.need for every work.
  }



  getToken(){
    //access token
    const token=JSON.parse(localStorage.getItem("token")|| "")
    //generate headers
    let headers=new HttpHeaders()
    //check token access or not
    if (token) {
      //add token into headers
     option.headers= headers.append('access_token',token)
    }
    return option
  }

  register(acno: any, uname: any, psw: any) {
    const data={acno,uname,psw}
    return this.http.post('http://localhost:3000/register',data)
  }
  login(acno: any, psw: any) {
    const data={acno,psw}
    return this.http.post('http://localhost:3000/login',data)
  }
  deposit(acno: any, psw: any, amount: any) {
    const data={acno,psw,amount}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())  //error overloading
    
  }
  Withdraw(acno: any, psw: any, amount: any) {
    const data={acno,psw,amount}
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
    
  }
  getTransaction(acno: any) { 
    const data={acno}
    return this.http.post('http://localhost:3000/transaction',data,this.getToken())
  }
  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/delete/'+acno,this.getToken())
  }
}
//code before ingeration
//register
 // var userDetails = this.userDetails
    // if (acno in userDetails) {
    //   return false
    // } else {
    //   userDetails[acno] = { username: uname, acno, password: psw, balance: 0, transaction: [] }
    //   console.log(userDetails);
    //   this.saveDetails()

    //   return true
    // }
//login
    // var userDetails = this.userDetails
    // if (acno in userDetails) {
    //   if (psword == userDetails[acno]["password"]) {
    //     //store username if loginsucces
    //     this.currentUser = userDetails[acno]["username"]
    //     this.currentAcnum = acno
    //     this.saveDetails()
    //     return true
    //   } else {
    //     return false
    //   }
    // } else {
    //   return false
    // }
    // var userDetails = this.userDetails
    // //to convert amount int
    // var amount = parseInt(amt)
    // if (acno in userDetails) {
    //   if (pwd == userDetails[acno]["password"]) {
    //     userDetails[acno]["balance"] += amount

    //     //add tranaction data
    //     userDetails[acno]["transaction"].push(
    //       {
    //         Type: "Credit",
    //         Amount: amount
    //       }
    //     )
    //     // this.saveDetails()
    //     return userDetails[acno]["balance"]
    //   } else {
    //     return false
    //   }
    // } else {
    //   return false
    // }
    //withdrew
    // var userDetails = this.userDetails
    // var amount = parseInt(wamt)
    // if (acno2 in userDetails) {
    //   if (pwd2 == userDetails[acno2]["password"]) {
    //     if (amount <= userDetails[acno2]["balance"]) {
    //       userDetails[acno2]["balance"] -= amount
    //       // console.log(userDetails);
    //       userDetails[acno2]["transaction"].push(
    //         {
    //           Type: "Debit",
    //           Amount: amount
    //         }
    //       )
    //       // console.log(userDetails);

    //       // this.saveDetails()


    //       return userDetails[acno2]["balance"]

    //     } else {
    //       alert("Insufficient balance")
    //     }

    //   }
    //   else {
    //     return false
    //   }

    // }
    // else {
    //   return false
    // }
      // saveDetails() {
  //   if (this.userDetails) {
  //     localStorage.setItem("userDeatils", JSON.stringify(this.userDetails))  //not string so convert into string
  //   }
  //   if (this.currentUser) {
  //     localStorage.setItem("currentuser", this.currentUser)  //already string value 
  //   }
  //   if (this.currentAcnum) {
  //     localStorage.setItem("currentAcnum", JSON.stringify(this.currentAcnum))  //converted to string
  //   }
  // }
  // getDetails(){  //call method in constructor
  //   if (localStorage.getItem("userDeatils")) {
  //     this.userDetails=JSON.parse(localStorage.getItem("userDeatils") || "")  
  //     //when run in angular , parse data not sure get the item ,so we put or and empty string.
  //     //when userdetails willnot get then empty string will read.
  //   }
  //   if (localStorage.getItem("currentuser")) {
  //     this.currentUser=localStorage.getItem("currentuser")
  //   }
  //   if (localStorage.getItem("currentAcnum")) {
  //     this.currentAcnum=JSON.parse(localStorage.getItem("currentAcnum") || "") //if stringify used to save the use parse when getitem
  //   }
  // }
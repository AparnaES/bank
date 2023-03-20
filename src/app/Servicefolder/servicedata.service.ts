import { Injectable } from '@angular/core';

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
  constructor() {
    this.getDetails()  //invoke when contructor work.need for every work.
  }

  saveDetails() {
    if (this.userDetails) {
      localStorage.setItem("userDeatils", JSON.stringify(this.userDetails))  //not string so convert into string
    }
    if (this.currentUser) {
      localStorage.setItem("currentuser", this.currentUser)  //already string value 
    }
    if (this.currentAcnum) {
      localStorage.setItem("currentAcnum", JSON.stringify(this.currentAcnum))  //converted to string
    }
  }
  getDetails(){  //call method in constructor
    if (localStorage.getItem("userDeatils")) {
      this.userDetails=JSON.parse(localStorage.getItem("userDeatils") || "")  
      //when run in angular , parse data not sure get the item ,so we put or and empty string.
      //when userdetails willnot get then empty string will read.
    }
    if (localStorage.getItem("currentuser")) {
      this.currentUser=localStorage.getItem("currentuser")
    }
    if (localStorage.getItem("currentAcnum")) {
      this.currentAcnum=JSON.parse(localStorage.getItem("currentAcnum") || "") //if stringify used to save the use parse when getitem
    }
  }

  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    } else {
      userDetails[acno] = { username: uname, acno, password: psw, balance: 0, transaction: [] }
      console.log(userDetails);
      this.saveDetails()

      return true
    }
  }
  login(acno: any, psword: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psword == userDetails[acno]["password"]) {
        //store username if loginsucces
        this.currentUser = userDetails[acno]["username"]
        this.currentAcnum = acno
        this.saveDetails()
        return true
      } else {
        return false
      }
    } else {
      return false
    }

  }
  deposit(acno: any, pwd: any, amt: any) {
    var userDetails = this.userDetails
    //to convert amount int
    var amount = parseInt(amt)
    if (acno in userDetails) {
      if (pwd == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amount

        //add tranaction data
        userDetails[acno]["transaction"].push(
          {
            Type: "Credit",
            Amount: amount
          }
        )
        this.saveDetails()
        return userDetails[acno]["balance"]
      } else {
        return false
      }
    } else {
      return false
    }
  }
  Withdraw(acno2: any, pwd2: any, wamt: any) {
    var userDetails = this.userDetails
    var amount = parseInt(wamt)
    if (acno2 in userDetails) {
      if (pwd2 == userDetails[acno2]["password"]) {
        if (amount <= userDetails[acno2]["balance"]) {
          userDetails[acno2]["balance"] -= amount
          // console.log(userDetails);
          userDetails[acno2]["transaction"].push(
            {
              Type: "Debit",
              Amount: amount
            }
          )
          // console.log(userDetails);

          this.saveDetails()


          return userDetails[acno2]["balance"]

        } else {
          alert("Insufficient balance")
        }

      }
      else {
        return false
      }

    }
    else {
      return false
    }

  }

  getTransaction(acno: any) {
    return this.userDetails[acno].transaction

  }

}

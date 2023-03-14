import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
  currentUser: any
  currentAcnum: any
  userDetails: any = {
    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0, transaction: [] },
    1001: { username: "manu", acno: 1001, password: "def123", balance: 0, transaction: [] },
    1002: { username: "jinu", acno: 1002, password: "ghi123", balance: 0, transaction: [] },
    1003: { username: "sanu", acno: 1003, password: "jkl123", balance: 0, transaction: [] }

  }
  constructor() { }

  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    } else {
      userDetails[acno] = { username: uname, acno, password: psw, balance: 0, transaction: [] }
      console.log(userDetails);

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

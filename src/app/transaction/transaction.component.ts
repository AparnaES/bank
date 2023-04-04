import { Component } from '@angular/core';
import { ServicedataService } from '../Servicefolder/servicedata.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transArray: any
  constructor(private ds: ServicedataService) {
    this.ds.getTransaction(JSON.parse(localStorage.getItem("currentAcnum") || "")).subscribe(
      (result:any)=>{
      this.transArray=result.transaction
    })
    console.log(this.transArray);
    
  }

}

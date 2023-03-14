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
    this.transArray = this.ds.getTransaction(this.ds.currentAcnum)
    console.log(this.transArray);
    
  }

}

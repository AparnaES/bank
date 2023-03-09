import { Component } from '@angular/core';
import { ServicedataService } from '../Servicefolder/servicedata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any
  constructor(private ds: ServicedataService) {
    this.user = this.ds.currentUser
  }

}

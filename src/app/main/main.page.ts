import { Component, OnInit } from '@angular/core';
import {RemoteService} from '../providers/remote-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loadedPatients = null;
  loadedCriticalCases = null;

  constructor(private remoteService: RemoteService) {
  }

  ngOnInit() {
    this.remoteService.getAllPatientAndRecord().subscribe(result => {
      this.loadedPatients = result;

      this.loadedCriticalCases = this.loadedPatients.filter(patient =>{
        return patient.status === "Critical";
      });
    });
  }

}

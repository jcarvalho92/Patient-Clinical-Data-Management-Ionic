import { Component, OnInit } from '@angular/core';
import {RemoteService} from '../../providers/remote-service.service';
@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.page.html',
  styleUrls: ['./view-all-patients.page.scss'],
})
export class ViewAllPatientsPage implements OnInit {
  loadedPatients = null;

  constructor(private remoteService: RemoteService) {
  }

  ngOnInit() {
    this.remoteService.getAllPatientAndRecord().subscribe(result => {
      this.loadedPatients = result;
    });
  }

}

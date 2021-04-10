import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {RemoteService} from '../../providers/remote-service.service';
@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.page.html',
  styleUrls: ['./search-patient.page.scss'],
})
export class SearchPatientPage implements OnInit {
  patient: any = {};
  loadedPatient = null;
  constructor(private remoteService: RemoteService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.remoteService.getPatientByNameFromApi(this.patient.patientInfo).subscribe(result => {
      this.loadedPatient = result;

      let navigationExtras: NavigationExtras = {
        state: {
          patient: this.loadedPatient
        }
      };

      this.router.navigate(['/', 'patientInfo'],navigationExtras);
    });
  }
}

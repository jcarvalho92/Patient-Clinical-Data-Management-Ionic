import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import {PatientService} from '../patient.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {RemoteService} from '../../providers/remote-service.service';
@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  //loaded: any;
  loadedPatient: any;
  /*constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute
  ) { }*/

  constructor(private remoteService: RemoteService,private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.loadedPatient = this.router.getCurrentNavigation().extras.state.patient;
      }

    });
  }

  ngOnInit() {
  }

}

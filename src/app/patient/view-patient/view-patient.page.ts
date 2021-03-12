import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient.model';
import {PatientService} from '../patient.service';
@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  loadedPatient: Patient;
  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('patientInfo')){
        //redirect
        return;
      }
      const patientInfo = paramMap.get('patientInfo');
      this.loadedPatient = this.patientService.getPatient(patientInfo);
      console.log(this.loadedPatient);
    })

  }

}

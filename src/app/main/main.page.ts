import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient.model';
import {PatientService} from '../patient/patient.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loadedPatients: Patient[];
  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.loadedPatients = this.patientService.getAllPatients();
  }

}

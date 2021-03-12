import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.page.html',
  styleUrls: ['./search-patient.page.scss'],
})
export class SearchPatientPage implements OnInit {
  patient: any = {};
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.patient);
  }
}

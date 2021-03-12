import { Injectable } from '@angular/core';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] =[
    {
      id: '1',
      dateIncluded: 0,
      patientName: 'Juliana Carvalho',
      age: 28,
      gender: "female",
      addr1: "998 Yonge Street",
      addr2: "apt 201",
      city: "Toronto",
      province: "Ontario",
      postcode: "M1LQ9H",
      mobNumb: "4372516982",
      email: "juliana@gmail.com"
    },
    {
      id: '2',
      dateIncluded: 0,
      patientName: 'Ricardo Sampaio',
      age: 31,
      gender: "female",
      addr1: "342 St Clair",
      addr2: "apt 101",
      city: "Toronto",
      province: "Ontario",
      postcode: "M2LQ5D",
      mobNumb: "4372346945",
      email: "ricardo@gmail.com"
    },
    {
      id: '3',
      dateIncluded: 0,
      patientName: 'Maria Fernandes',
      age: 33,
      gender: "female",
      addr1: "234 Yonge Street",
      addr2: "apt 101",
      city: "Toronto",
      province: "Ontario",
      postcode: "K1GQ9B",
      mobNumb: "4372236965",
      email: "maria@gmail.com"
    }

  ];

  constructor() { }

  getAllPatients(){
    return [...this.patients];
  }

  getPatient(patientInfo: string){
    if (isNaN(Number(patientInfo))) {
      return {...this.patients.find(patient =>{
        return patient.patientName === patientInfo
      })};
    }

    return {...this.patients.find(patient =>{
      return patient.id === patientInfo
    })};
  }
}

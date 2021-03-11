import { Injectable } from '@angular/core';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] =[
    {
      id: '1',
      name: 'Juliana Carvalho'
    },
    {
      id: '2',
      name: 'Ricardo Sampaio'
    },
    {
      id: '3',
      name: 'Test Santos'
    }

  ];

  constructor() { }

  getAllPatients(){
    return [...this.patients];
  }
}

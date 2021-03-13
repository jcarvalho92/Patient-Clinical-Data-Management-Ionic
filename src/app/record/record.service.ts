import { Injectable } from '@angular/core';
import {Record} from './record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private records: Record[] =[
    {
      id: '1',
      patientName: 'Juliana Carvalho',
      bloodPressure: "80/60",
      respiratoryRate: "90",
      bloodOxygenLevel: "98%",
      heartbeatRate: "12",
      weight: "70",
      height: "1.51",
      temp: "37",
    },
    {
      id: '2',
      patientName: 'Ricardo Sampaio',
      bloodPressure: " ",
      respiratoryRate: " ",
      bloodOxygenLevel: " ",
      heartbeatRate: " ",
      weight: " ",
      height: " ",
      temp: " ",
    },
    {
      id: '3',
      patientName: 'Maria Fernandes',
      bloodPressure: " ",
      respiratoryRate: " ",
      bloodOxygenLevel: " ",
      heartbeatRate: " ",
      weight: " ",
      height: " ",
      temp: " ",
    }

  ];

  constructor() { }

  getAllPatients(){
    return [...this.records];
  }

  getPatient(patientInfo: string){
    if (isNaN(Number(patientInfo))) {
      return {...this.records.find(patient =>{
        return patient.patientName === patientInfo
      })};
    }

    return {...this.records.find(patient =>{
      return patient.id === patientInfo
    })};
  }
}

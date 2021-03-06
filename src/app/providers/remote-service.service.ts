import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  url = "http://192.168.0.101:4000/api/";

  patientPath = "patients";
  recordPath = "records";
  patient: Observable<any>;
  patient2: any;

  constructor(private http: HttpClient) { }

  getAllPatientAndRecord() {
    const result = this.http.get(`${this.url}${this.patientPath}/${this.recordPath}/all`);
    return result;
  }

  getPatientByIdFromApi(patientID) {
    const result = this.http.get(`${this.url}${this.patientPath}/${patientID}`);
    return result;
  }

  getPatientByNameFromApi(name) {
    const result = this.http.get(`${this.url}${this.patientPath}/name/${name}`);
    return result;
  }

  sendPatientDataToApi(dateIncluded, patient){
    const result = this.http.post(`${this.url}${this.patientPath}`, {
      dateIncluded: dateIncluded,
      patientName: patient.name,
      age: patient.age,
      gender: patient.gender ,
      addr1: patient.address,
      addr2: patient.addressLine2,
      city: patient.city ,
      province: patient.province ,
      postcode: patient.postalCode,
      mobNumb: patient.phone,
      email: patient.email});
    return result;
  }

  getPatientRecordByNameFromApi(name) {
    const result = this.http.get(`${this.url}${this.patientPath}/name/${name}/${this.recordPath}`);
    return result;
  }
  getPatientRecordByIdFromApi(patientID) {
    const result = this.http.get(`${this.url}${this.patientPath}/${patientID}/${this.recordPath}`);
    return result;
  }

  sendPatientRecordDataToApi(dateIncluded, record,patientId, doctorName){
    const result = this.http.post(`${this.url}${this.patientPath}/${patientId}/${this.recordPath}`, {
      dateIncluded: dateIncluded,
      doctor: doctorName,
      bloodPressure : record.bloodPressure,
      respiratoryRate : record.respiratoryRate,
      bloodOxygen : record.bloodOxygenLevel,
      heartbeatRate : record.heartbeatRate,
      weight : record.weight,
      height : record.height,
      temperature : record.temp,
      status: record.status
    });
    return result;
  }


}

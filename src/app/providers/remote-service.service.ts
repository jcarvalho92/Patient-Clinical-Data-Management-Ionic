import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  url = "https://patient-data-api.herokuapp.com/api/";
  patientPath = "patients";
  recordPath = "records";

  constructor(private http: HttpClient) { }

  getAllPatientAndRecord() {
    const result = this.http.get(`${this.url}${this.patientPath}/${this.recordPath}/all`);
    console.log(result);
    return result;
  }
}
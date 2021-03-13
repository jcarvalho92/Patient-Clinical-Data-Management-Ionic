import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Record } from '../record.model';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.page.html',
  styleUrls: ['./view-record.page.scss'],
})
export class ViewRecordPage implements OnInit {

  loadedRecord: Record;
  constructor(
     private recordService: RecordService, 
     private activatedRoute: ActivatedRoute 
    ) { }

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has('patientInfo')){
          //redirect
          return;
    }
    const patientInfo = paramMap.get('patientInfo');
    this.loadedRecord = this.recordService.getPatient(patientInfo);
    console.log(this.loadedRecord);
   })
  
    }
  }
  
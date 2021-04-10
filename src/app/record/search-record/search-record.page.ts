import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {RemoteService} from '../../providers/remote-service.service';

@Component({
  selector: 'app-search-record',
  templateUrl: './search-record.page.html',
  styleUrls: ['./search-record.page.scss'],
})
export class SearchRecordPage implements OnInit {

  record: any = {};
  loadedRecord = null;
  constructor(private remoteService: RemoteService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log("test 1");
    this.remoteService.getPatientRecordByNameFromApi(this.record.recordInfo).subscribe(result => {
      this.loadedRecord = result;
      let navigationExtras: NavigationExtras = {
        state: {
          record: this.loadedRecord
        }
      };
      console.log(this.loadedRecord);
      this.router.navigate(['/', 'recordInfo'],navigationExtras);
    });
  }

}



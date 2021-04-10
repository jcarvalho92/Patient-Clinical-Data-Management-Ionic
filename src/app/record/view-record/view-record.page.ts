import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {RemoteService} from '../../providers/remote-service.service';
//import { Record } from '../record.model';
//import { RecordService } from '../record.service';


@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.page.html',
  styleUrls: ['./view-record.page.scss'],
})
export class ViewRecordPage implements OnInit {

  loadedRecord: any;

  constructor(private remoteService: RemoteService,private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.loadedRecord = this.router.getCurrentNavigation().extras.state.record;
      }

    });
  }

  ngOnInit() {
  }
}

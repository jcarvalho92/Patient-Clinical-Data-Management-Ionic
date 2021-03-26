import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {RemoteService} from '../../providers/remote-service.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.page.html',
  styleUrls: ['./add-record.page.scss'],
})
export class AddRecordPage implements OnInit {

  record: any ={};
  doctorName: any;

  constructor(private remoteService: RemoteService,private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.doctorName = this.router.getCurrentNavigation().extras.state.doctorName;
      }
    });
  }
  ngOnInit() {
  }
  submit() {

    var today = new Date();
    var date = today.getMonth()+1 + "/"+ today.getDate() +"/"+ today.getFullYear();

    this.remoteService.sendPatientRecordDataToApi(date,this.record,this.doctorName).subscribe((response) => {
      this.router.navigate(['/', 'main']);
    });
  }

}

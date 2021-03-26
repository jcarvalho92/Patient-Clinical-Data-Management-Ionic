import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {RemoteService} from '../../providers/remote-service.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  patient: any = {};
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

    let navigationExtras: NavigationExtras = {
      state: {
        doctorName: this.doctorName
      }
    };

    this.remoteService.sendPatientDataToApi(date,this.patient).subscribe((response) => {
      this.router.navigate(['/', 'add-record'],navigationExtras);
    });
  }
}


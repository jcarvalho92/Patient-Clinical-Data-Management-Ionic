import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  patientDetails: any;

  constructor(private remoteService: RemoteService,private route: ActivatedRoute, private router: Router,public alertController: AlertController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.doctorName = this.router.getCurrentNavigation().extras.state.doctorName;
        this.patientDetails =  this.router.getCurrentNavigation().extras.state.patientDetails;
      }
    });
  }
  ngOnInit() {
  }
  submit() {
    console.log(this.doctorName);
    console.log(this.patientDetails);
    var today = new Date();
    var date = today.getMonth()+1 + "/"+ today.getDate() +"/"+ today.getFullYear();

    this.remoteService.sendPatientRecordDataToApi(date,this.record,this.patientDetails._id,this.doctorName)
    .subscribe(
    (response) => {
      this.router.navigate(['/', 'main']);
    },
    (e) => {  //Error callback
      console.log(e.error);
      this.presentAlert(e.error)
    }

    );
  }

  async presentAlert(errorMsg) {
    const alert = await this.alertController.create({
      message: errorMsg,
      buttons: ['OK']
    });

    await alert.present();
  }

}

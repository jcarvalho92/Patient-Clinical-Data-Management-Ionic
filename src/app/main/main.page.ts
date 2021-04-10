import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {RemoteService} from '../providers/remote-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loadedPatients = null;
  loadedCriticalCases = null;
  doctor: any;
  doctorName: string;


  constructor(private remoteService: RemoteService,private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.doctor = this.router.getCurrentNavigation().extras.state.doctor;
        this.doctorName = this.doctor[0].name;
      }

    });
  }

  ngOnInit() {
    this.remoteService.getAllPatientAndRecord().subscribe(result => {
      this.loadedPatients = result;

      this.loadedCriticalCases = this.loadedPatients.filter(patient =>{
        return patient.status.toLowerCase() === "critical";
      });
    });
  }


  navigateToAddPatient() {
    let navigationExtras: NavigationExtras = {
      state: {
        doctorName: this.doctorName
      }
    };
    this.router.navigate(['/', 'add-patient'],navigationExtras);
  }

  navigateToAddRecord() {
    let navigationExtras: NavigationExtras = {
      state: {
        doctorName: this.doctorName
      }
    };
    this.router.navigate(['/', 'add-record'],navigationExtras);
  }


}

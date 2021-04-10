import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  userList = [
    {
      id: 1,
      name: 'Marcia Lopes',
      email: 'marcialopes@wecare.com',
      type: 'nurse'
    },
    {
      id: 2,
      name: 'Jake Pitt',
      email: 'jakepitt@wecare.com',
      type: 'doctor'
    },
    {
      id: 3,
      name: 'Emily Mars',
      email: 'emilymars@wecare.com',
      type: 'nurse'
    },

  ]
  doctor: any = {};
  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  submit() {

    let result = this.userList.filter(item => item.email.includes(this.doctor.email.toLowerCase())) ;
    let navigationExtras: NavigationExtras = {
      state: {
        doctor: result
      }
    };

    if(result.length != 0){
      this.router.navigate(['/', 'main'],navigationExtras);
    }
    else{
      this.presentAlert();
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'User does not found,Please try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

}

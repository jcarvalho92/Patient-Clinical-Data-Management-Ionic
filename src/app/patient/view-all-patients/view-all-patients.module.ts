import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPatientsPageRoutingModule } from './view-all-patients-routing.module';

import { ViewAllPatientsPage } from './view-all-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPatientsPageRoutingModule
  ],
  declarations: [ViewAllPatientsPage]
})
export class ViewAllPatientsPageModule {}

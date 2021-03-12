import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPatientsPage } from './view-all-patients.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPatientsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchRecordPage } from './search-record.page';

const routes: Routes = [
  {
    path: '',
    component: SearchRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRecordPageRoutingModule {}

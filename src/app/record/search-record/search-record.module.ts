import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRecordPageRoutingModule } from './search-record-routing.module';

import { SearchRecordPage } from './search-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRecordPageRoutingModule
  ],
  declarations: [SearchRecordPage]
})
export class SearchRecordPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PmPage } from './pm';

@NgModule({
  declarations: [
    PmPage,
  ],
  imports: [
    IonicPageModule.forChild(PmPage),
  ],
  exports: [
    PmPage
  ]
})
export class PmPageModule {}

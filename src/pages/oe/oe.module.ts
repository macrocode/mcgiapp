import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OePage } from './oe';

@NgModule({
  declarations: [
    OePage,
  ],
  imports: [
    IonicPageModule.forChild(OePage),
  ],
  exports: [
    OePage
  ]
})
export class OePageModule {}

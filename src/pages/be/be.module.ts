import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BePage } from './be';

@NgModule({
  declarations: [
    BePage,
  ],
  imports: [
    IonicPageModule.forChild(BePage),
  ],
  exports: [
    BePage
  ]
})
export class BePageModule {}

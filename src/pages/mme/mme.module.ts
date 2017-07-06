import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MmePage } from './mme';

@NgModule({
  declarations: [
    MmePage,
  ],
  imports: [
    IonicPageModule.forChild(MmePage),
  ],
  exports: [
    MmePage
  ]
})
export class MmePageModule {}

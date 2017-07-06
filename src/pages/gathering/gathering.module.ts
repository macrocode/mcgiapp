import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GatheringPage } from './gathering';

@NgModule({
  declarations: [
    GatheringPage,
  ],
  imports: [
    IonicPageModule.forChild(GatheringPage),
  ],
  exports: [
    GatheringPage
  ]
})
export class GatheringPageModule {}

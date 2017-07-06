import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WspmPage } from './wspm';

@NgModule({
  declarations: [
    WspmPage,
  ],
  imports: [
    IonicPageModule.forChild(WspmPage),
  ],
  exports: [
    WspmPage
  ]
})
export class WspmPageModule {}

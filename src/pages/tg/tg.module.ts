import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TgPage } from './tg';

@NgModule({
  declarations: [
    TgPage,
  ],
  imports: [
    IonicPageModule.forChild(TgPage),
  ],
  exports: [
    TgPage
  ]
})
export class TgPageModule {}

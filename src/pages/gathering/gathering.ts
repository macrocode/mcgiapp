import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { GatheringPopoverPage } from '../gathering-popover/gathering-popover';
/**
 * Generated class for the GatheringPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gathering',
  templateUrl: 'gathering.html',
})
export class GatheringPage {
   conferenceDate = '2047-05-17';
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }
 presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(GatheringPopoverPage);
    popover.present({ ev: event });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GatheringPage');
  }

}

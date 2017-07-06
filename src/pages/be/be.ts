import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { EventsPopoverPage } from '../events-popover/events-popover';
/**
 * Generated class for the BePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-be',
  templateUrl: 'be.html',
})
export class BePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

 presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(EventsPopoverPage);
    popover.present({ ev: event });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BePage');
  }

}

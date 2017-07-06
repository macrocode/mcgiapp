import { Component } from '@angular/core';
import { BePage } from '../be/be';
import { MmePage } from '../mme/mme';
import { OePage } from '../oe/oe';
import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="gotopage('be')">Bible Exposition</button>
      <button ion-item (click)="gotopage('mm')">Music Ministry Events</button>
      <button ion-item (click)="gotopage('oe')">Other Events</button>
    </ion-list>
  `
})
export class EventsPopoverPage {
  
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

 
  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }

   gotopage(pagename: string) {
        if (pagename == "be")
        {
          // this.navCtrl.push(AboutPage);
           this.app.getRootNav().push(BePage);
        }
        else if (pagename == "mm")
        {
          // this.navCtrl.push(AboutPage);
           this.app.getRootNav().push(MmePage);
        }
        else if (pagename == "oe")
        {
          // this.navCtrl.push(AboutPage);
           this.app.getRootNav().push(OePage);
        }
    }
}
import { Component } from '@angular/core';
import { GatheringPage } from '../gathering/gathering';
import { WspmPage } from '../wspm/wspm';
import { TgPage } from '../tg/tg';
import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="gotopage('gathering')">Places of Worship</button>
      <button ion-item (click)="gotopage('wspm')">Workship Service and Prayer Meetings</button>
      <button ion-item (click)="gotopage('tg')">Thanksgiving</button>
    </ion-list>
  `
})
export class GatheringPopoverPage {
  
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }

   gotopage(pagename: string) {
        if (pagename == "gathering")
        {
          // this.navCtrl.push(AboutPage);
           this.app.getRootNav().push(GatheringPage);
        }
        else if (pagename == "wspm")
        {
          // this.navCtrl.push(AboutPage);
           this.app.getRootNav().push(WspmPage);
        }
        else if (pagename == "tg")
        {
          // this.navCtrl.push(AboutPage);
           this.app.getRootNav().push(TgPage);
        }
    }
}
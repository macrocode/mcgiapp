import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Subscription} from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
   connected: Subscription;
   disconnected: Subscription;

  constructor(public navCtrl: NavController,private toast: ToastController, public network: Network) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  
  ionViewDidEnter() {
  this.connected = this.network.onConnect().subscribe((val) =>  {
    console.log(val)
    this.displayNetworkUpdate(val.type);
  }, error => console.error(error));
 
  this.disconnected = this.network.onDisconnect().subscribe(data => {
    console.log(data)
    this.displayNetworkUpdate(data.type);
  }, error => console.error(error));
}

displayNetworkUpdate(connectionState: string){
  let networkType = this.network.type
  this.toast.create({
    message: `You are now ${connectionState} via ${networkType}`,
    duration: 3000
  }).present();
}

ionViewWillLeave(){
  this.connected.unsubscribe();
  this.disconnected.unsubscribe();
}

}

import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { BePage } from '../be/be';
import { GatheringPage } from '../gathering/gathering';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = GatheringPage;
  tab2Root: any = BePage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}

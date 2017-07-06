import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { GatheringPage } from '../gathering/gathering';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  selector: 'page-gatheringtabs',
  templateUrl: 'gatheringtabs.html',
})
export class GatheringtabsPage {
  // set the root pages for each tab
  tab1Root: any = GatheringPage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}


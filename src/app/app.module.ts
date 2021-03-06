import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { MCGIApp } from './app.component';

import { AboutPage } from '../pages/about/about';

// Pop over Pages
import { PopoverPage } from '../pages/about-popover/about-popover';
import { GatheringPopoverPage } from '../pages/gathering-popover/gathering-popover';
import { EventsPopoverPage } from '../pages/events-popover/events-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { GatheringtabsPage } from '../pages/gatheringtabs/gatheringtabs';
import { WspmPage } from '../pages/wspm/wspm';
import { TgPage } from '../pages/tg/tg';
import { BePage } from '../pages/be/be';
import { MmePage } from '../pages/mme/mme';
import { OePage } from '../pages/oe/oe';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { GatheringPage } from '../pages/gathering/gathering';
import { NewsPage } from '../pages/news/news';
import { PmPage} from '../pages/pm/pm';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { Network } from '@ionic-native/network'; 

@NgModule({
  declarations: [
    MCGIApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    EventsPopoverPage,
    GatheringPopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    GatheringtabsPage,
    TutorialPage,
    SupportPage,
    GatheringPage,
    WspmPage,
    TgPage,
    BePage,
    MmePage,
    OePage,
    NewsPage,
    PmPage
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MCGIApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: GatheringtabsPage, name: 'GatheringtabsPage', segment: 'Gatheringtabs' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: GatheringPage, name: 'Gathering', segment: 'gathering' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: NewsPage, name: 'NewsPage', segment: 'news' },
        { component: PmPage, name: 'PmPage', segment: 'pmpage' },
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MCGIApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    EventsPopoverPage,
    GatheringPopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    GatheringtabsPage,
    TutorialPage,
    SupportPage,
    GatheringPage,
    WspmPage,
    TgPage,
    BePage,
    MmePage,
    OePage,
    NewsPage,
    PmPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    Network
  ]
})
export class AppModule { }

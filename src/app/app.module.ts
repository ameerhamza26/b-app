import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutRepresentativePage } from "../pages/about-representative/about-representative";
import { CausesListPage } from "../pages/causes-list/causes-list";
import { CausePage } from "../pages/cause/cause";
import {  LogoPage } from "../pages/logo/logo";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogoPage,
    AboutRepresentativePage,
    CausesListPage,
    CausePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogoPage,
    AboutRepresentativePage,
    CausesListPage,
    CausePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

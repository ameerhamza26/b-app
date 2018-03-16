import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutRepresentativePage } from "../about-representative/about-representative";

/**
 * Generated class for the CausePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cause',
  templateUrl: 'cause.html',
})
export class CausePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigate() {
    this.navCtrl.push(AboutRepresentativePage);
  }

}

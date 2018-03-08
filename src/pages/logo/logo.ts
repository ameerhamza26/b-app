import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CausesListPage} from "../causes-list/causes-list"

@Component({
  selector: 'page-logo',
  templateUrl: 'logo.html'
})
export class LogoPage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {
    this.navCtrl.push(CausesListPage);
  }

}

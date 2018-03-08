import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home"

@Component({
  selector: 'page-causes-list',
  templateUrl: 'causes-list.html'
})
export class CausesListPage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {
    this.navCtrl.push(HomePage);
  }

}

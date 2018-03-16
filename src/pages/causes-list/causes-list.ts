import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CausePage } from "../cause/cause"

@Component({
  selector: 'page-causes-list',
  templateUrl: 'causes-list.html'
})
export class CausesListPage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {
    this.navCtrl.push(CausePage);
  }

}



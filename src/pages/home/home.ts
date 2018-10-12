import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DescriptionComponent} from "../../components/description/description";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  descriptionpage() {
    this.navCtrl.push(DescriptionComponent)
  }
}

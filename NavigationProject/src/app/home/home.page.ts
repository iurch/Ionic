import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public navCtrl: NavController) {}

  navitateToSecondPage(): void {
    this.navCtrl.navigateForward(['second-page']);
  }
}

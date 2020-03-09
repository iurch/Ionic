import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isOn: boolean = false;

  constructor(private flashLight: Flashlight, private platfom: Platform) {

    this.platfom.ready().then(() => {
      this.updateFlashlightStatus();
    });
  }


  switchOn() {
    this.flashLight.switchOn();
    this.updateFlashlightStatus();
    console.log('switch ON');
  }

  switfOff() {
    this.flashLight.switchOff();
    this.updateFlashlightStatus();
    console.log('switch OFF');
  }

  toggle() {
    this.flashLight.toggle();
    this.updateFlashlightStatus();
    console.log('Toggle');
  }

  updateFlashlightStatus() {
    if (this.isOn) {
      this.isOn = false;
    } else {
      this.isOn = true;
    }
  }

}

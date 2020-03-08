import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {

  message: string;

  constructor(private navCtl: NavController) {
    // this.message = this.navParams.get('id');
    // alert(this.message);
   }

  ngOnInit() {
  }

  back() {
    // this.navCtl.back();
    this.navCtl.navigateRoot('home');
  }

}

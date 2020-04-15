import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MESSAGE_LIST } from '../../mocks/messages/messages';
import { Message } from '../../models/message/message.interface';
/**
 * Generated class for the IboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ibox',
  templateUrl: 'ibox.html',
})
export class IboxPage {
  
  message_list:Message[] = MESSAGE_LIST;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.message_list);
  }

}

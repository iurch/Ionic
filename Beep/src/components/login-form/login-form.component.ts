import { Component, EventEmitter, Output } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth.service';
import { NavController } from 'ionic-angular';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  @Output() loginStatus: EventEmitter<LoginResponse>;

  account = {} as Account;

  constructor(private navCtrl: NavController, private authProvider: AuthProvider) { 
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  async login() {
      const loginResponse = await this.authProvider.signWithEmailAndPassword(this.account);
      this.loginStatus.emit(loginResponse)
  }

}

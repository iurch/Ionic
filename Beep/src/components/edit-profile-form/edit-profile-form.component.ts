import { Component, OnDestroy } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';

import { User } from 'firebase/app';

import { AuthProvider } from '../../providers/auth/auth.service'
import { DataProvider } from '../../providers/data/data.service'

import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy { 

  private authenticatedUser$:Subscription;
  private authenticatedUser: User;
  profile = {} as Profile
  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.authenticatedUser$ =  this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
  }
  

  async saveProfile() {
    if(this.authenticatedUser) {
      const result = await this.data.saveProfile(this.authenticatedUser,this.profile);
      console.log(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}

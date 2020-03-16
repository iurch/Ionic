import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubServiceProvider } from '../../providers/github-service/github-service';

import { User } from "../../models/user.interface";
import { Repository } from '../../models/repository.interface';

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  user: User;
  repositories: Repository[];
  constructor(private navCtrl: NavController, private navParams: NavParams, private githubService: GithubServiceProvider) {
  }

  getUserInformation():void {
    this.githubService.getUserInformation(this.username).subscribe((data: User) => this.user = data);
    // this.githubService.mockGetUserInformation(this.username).subscribe((u: User) => this.user = u);
    // this.githubService.mockGetRepositoryInformation(this.username).subscribe((d: Repository[]) => this.repositories = d);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username)
      this.getUserInformation();
  }

}

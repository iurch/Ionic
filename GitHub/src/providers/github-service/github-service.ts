import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


import { USER_LIST } from '../../mocks/user.mocks';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private baseUrl = 'https://api.github.com/user';
  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }


  getUserInformation(username: string): Observable<User> {
    console.log(`${this.baseUrl}/${username}`);
    return this.http.get(`${this.baseUrl}/${username}`)
            .do(this.printResponse)
            .map(this.getJson)
            .do(this.printResponse)
            .catch(this.handleError);
  }


  getRepositoryInformation(username: string): Observable<Repository[]> {
    console.log(`${this.baseUrl}/${username}/repos`);
    return this.http.get(`${this.baseUrl}/${username}`)
            .do((data: Response) => console.log(data))
            .map((data: Response) => data.json())
            .do((data: Response) => console.log(data))
            .catch((error : Response) => Observable.throw(error.json().error || 'Server Error.'));
  }

  mockGetRepositoryInformation(username : string) : Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter((repo:Repository) => repo.owner.name === username));
  }

  mockGetUserInformation(username: string): Observable<User> {

    return Observable.of(USER_LIST.filter(user => user.name == username)[0]);

  }

  private printResponse(data: Response) {
    console.log(data);
  }

  private getJson(data: Response) {
    return data.json()
  }

  private handleError(error: Response | any) {
    return Observable.throw(error.json().error || 'Server Error.');
  }

}

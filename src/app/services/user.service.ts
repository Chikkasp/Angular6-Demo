import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private _apiURL = `${environment.fireBase.databaseURL}/users.json`;

  constructor( private http: HttpClient) { 

  }

  addUser(user){
    return this.http.post(this._apiURL, user);
  }

  getusers(){
    return this.http.get(this._apiURL);
  }
}

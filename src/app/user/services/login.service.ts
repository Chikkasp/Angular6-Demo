import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _acessToken :string;
  constructor(private afAuth : AngularFireAuth) { 
    this.afAuth.idToken.subscribe(
      (data) => {
        if(data){
          this._acessToken = data;
          localStorage.setItem('token', this._acessToken);
        }
      }
    );
  }

  loginWithGoogle(){
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
  logOut(){
    this.afAuth.auth.signOut();
  }

  public get  currentUser(){
        return this.afAuth.authState;
  }
  public get acessToken() :string {
    return this._acessToken;
  }
}

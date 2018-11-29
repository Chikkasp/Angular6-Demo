import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth : AngularFireAuth) { }

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
}

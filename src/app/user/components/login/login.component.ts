import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(private lgService : LoginService) {

   }
  logIn(){
    this.lgService.loginWithGoogle().then(
      (data) => {
        console.log('success '+data.credential.idToken);
      },
      (err) =>{
        console.log('error '+err);
      }
    )
  }
  ngOnInit() {
    this.lgService.currentUser.subscribe(
      (data) => this.loggedIn = !!data,
      (err) => console.log('error',err)
    );
  }

  logOut(){
    this.lgService.logOut();
  }

}

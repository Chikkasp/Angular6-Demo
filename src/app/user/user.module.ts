import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFireAuthModule
  ],
  exports : [LoginComponent]
})
export class UserModule { }

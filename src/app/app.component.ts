import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentCurrency : string = null;

  getCode = function(code){
    console.log('code in APP :: '+code);
    this.currentCurrency = code;
  }

}

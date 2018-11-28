import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies : string[] =['INR','USD','CAD','GBP','EUR'];

  @Output() selectedCode = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getCurrency = function(code){
    console.log('currencyCode :: '+code);
    this.selectedCode.emit({data:code});
  }

}

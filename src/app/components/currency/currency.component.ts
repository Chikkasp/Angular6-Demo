import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies : string[] =['INR','USD','CAD','GBP','EUR'];

//@Output() selectedCode = new EventEmitter();
  constructor(private curService :CurrencyService) { }

  ngOnInit() {
  }
  getCurrency = function(code){
    //console.log('currencyCode :: '+code);
    //this.selectedCode.emit({data:code});
    this.curService.updateCurrency(code);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private _code = 'INR';
  private currencySubject = new BehaviorSubject(this._code);
  currencyObservable$ = this.currencySubject.asObservable();
  constructor() { }
  
  updateCurrency(code){
    this._code = code;
    this.currencySubject.next(this._code);
  }
}

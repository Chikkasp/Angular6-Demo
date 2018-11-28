import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number,code:string): any {
    if(isNaN(value)){return null}
    switch(code){
      case 'USD' :value/=70;
      break;
      case 'EUR' :value/=0;
      break;
      case 'GBP' :value/=80;
      break;
      case 'CAD' :value/=50;
      break;

    }
    return value;
  }

}

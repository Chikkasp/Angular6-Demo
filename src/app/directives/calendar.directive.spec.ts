import { CalendarDirective } from './calendar.directive';
import { ElementRef } from '@angular/core';

describe('CalendarDirective', () => {
  fit('should create an instance', () => {
    const directive = new CalendarDirective(new ElementRef(HTMLInputElement));
    expect(directive).toBeTruthy();
  });
  fit('expects to append slashed',() =>{
    const eRef = new ElementRef(HTMLInputElement);
    eRef.nativeElement['value'] = "10102000";
    const directive = new CalendarDirective(eRef);
    directive.appendSlash(KeyboardEvent);
    expect(eRef.nativeElement['value']).toBe("10/10/2000");//

  })
});

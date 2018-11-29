import { Directive ,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appCalendar]'
})
export class CalendarDirective {
//<input type="text" appCalendar />

@Input() appCalendar : string;
  constructor(private eRef : ElementRef) { }

  @HostListener('keypress',['$event'])
  appendSlash(ev){
    if(ev.keyCode <48 || ev.keyCode >57 ){
      ev.preventDefault()
    }else{
      const element = this.eRef.nativeElement;

      if(element.value.length ===2 || element.value.length ===5){
        element.value += this.appCalendar || '/';
      }
    }
  }

}

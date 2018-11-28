import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  @Input() ctrl : FormControl;
  constructor() { }

  ngOnInit() {
  }
  shouldShowErrors() :boolean {
      return this.ctrl && this.ctrl.touched && !!this.ctrl.errors;
  }

  private Error_Messages  = {
    'required' : () => 'This field is required',
    'minlength': (par) => `Min chars allowed is ${par['requiredLength']}`,
    'pinCode': (par) => `Allowed pincode is ${par['valiCode']}`
  }

  listOfErrors() : string []{
    console.log(this.ctrl.errors);
    return Object.keys(this.ctrl.errors).map(
      (key) => this.Error_Messages[key](this.ctrl.getError(key))
    );
  }

  

}

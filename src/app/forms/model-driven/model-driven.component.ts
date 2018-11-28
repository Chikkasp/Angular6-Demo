import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pinCodeValidator } from '../validators';
 '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  userForm: FormGroup  = new  FormGroup({
    name : new FormControl(null,
      [Validators.required, Validators.minLength(5)]),
    age : new FormControl(21, [Validators.required]),
    address: new FormGroup({
      city : new FormControl(null, {updateOn : 'change'}),
      pinCode :new FormControl(null, [Validators.required,pinCodeValidator])
    })
  },{updateOn : 'submit'});
  constructor() { }

  ngOnInit() {
  }

  public get addressObj() :FormGroup{
    return <FormGroup> this.userForm.get('address');
  }

}

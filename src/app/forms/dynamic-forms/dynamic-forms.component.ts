import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { pinCodeValidator } from '../validators';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userForm: FormGroup  = new  FormGroup({
    name : new FormControl(null,
      [Validators.required, Validators.minLength(5)]),
    age : new FormControl(21, [Validators.required]),
    address: new FormArray([
          this.newAddress()
    ])
  },{updateOn : 'submit'});

  public get addressObj() :FormArray{
    return <FormArray> this.userForm.get('address');
  }

  newAddress(){
    return   new FormGroup({
      city : new FormControl(null, {updateOn : 'change'}),
      pinCode :new FormControl(null, [Validators.required,pinCodeValidator])
    })
  }
  addAddress(){
    this.addressObj.push(this.newAddress());
  }

  removeAddress(i){
    this.addressObj.removeAt(i);
  }
}

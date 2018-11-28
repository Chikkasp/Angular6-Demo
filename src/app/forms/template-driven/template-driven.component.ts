import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveData(formData:NgForm){
    if(formData.valid){
      alert('form submitted');
    }
    console.log(formData);
  }

  loadData(formData: NgForm){
    const user = {
      "name": "Satya",
      "age": "31",
      "address": {
        "city": "Hyd",
        "pincode": "5000072"
      }
    }
    formData.form.setValue(user);
  };

  patchData(formData: NgForm){
    const user = {
      "name": "Satya",
      "age": "31"

    }
    formData.form.patchValue(user);
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pinCodeValidator } from '../validators';
import {UserService} from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css'],
  providers : [UserService]
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
  constructor( private uService : UserService, private activateRoute :ActivatedRoute) {
     this.activateRoute.paramMap.subscribe(
       (param) => {
         if(param.has('id')){
          const id = param.get('id');
          console.log('ID -->',id);
          this.getUserData(id);
         } 
       }
     )
   }

  ngOnInit() {
  }

  public get addressObj() :FormGroup{
    return <FormGroup> this.userForm.get('address');
  }

  saveData(){
    if(this.userForm.valid){
      this.uService.addUser(this.userForm.value).subscribe(
        (data) =>{ console.log('success', data);},
        (err) => { console.log('error', err)}
      )
    }else{
      alert('invalid form data');
    }
  }

  getUserData(id){
    this.uService.getuserById(id).subscribe(
      (data) => {
        this.userForm.setValue(data);
      },
      (err) => {
        console.log('error occured',err);
      }
    )
  }

 

}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers : [UserService]
})
export class UserListComponent implements OnInit {

  uList : any;

  constructor(private uService : UserService) { 

  }

  ngOnInit() {
    this.uService.getusers().subscribe(
      (data) => {
        console.log('success',data);
        this.uList = data ;
      },
      (err) => {
        console.log('error', err);
      }
    )
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 @Input() user:any= null;
 @Input() id : string;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToForms(){
    console.log("Do something");
    this.router.navigate(
      ['/forms/model',this.id],
      {queryParams : {action : 'update'}});
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    @Input() code :string 
  pList: Product []= [{
    pCost:10000,
    pId:1000,
    pImage :'assets/TV.jpeg',
    pName: 'Product 1',
    pStock : true
  },{
    pCost:20000,
    pId:2000,
    pImage :'assets/TV.jpeg',
    pName: 'Product 2',
    pStock : false
  },{
    pCost:30000,
    pId:3000,
    pImage :'assets/TV.jpeg',
    pName: 'Product 3',
    pStock : true
  }]
  constructor() { }

  ngOnInit() {
  }

}

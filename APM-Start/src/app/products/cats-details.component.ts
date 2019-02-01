import { Component, OnInit } from '@angular/core';
import { ICat } from './cat';

@Component({
  //selector: 'pm-cats-details',
  templateUrl: './cats-details.component.html',
  styleUrls: ['./cats-details.component.css']
})
export class CatsDetailsComponent implements OnInit {
  pageTitle: string = "Product Details";
  product: ICat;

  constructor() { }

  ngOnInit() {
  }

}

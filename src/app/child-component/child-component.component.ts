import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  products: String[];

  constructor() {
    this.products = ['Computer', 'Laptop', 'Mouse', 'Keyboard'];
  }

  ngOnInit() {
  }

}

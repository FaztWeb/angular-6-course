import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  name: string = 'Ryan Ray';
  age: number;
  address: {
    street: string;
    city: string;
  };
  book: Product;
  hobbies: string[];
  computers: Product[];

  constructor() {
    this.age = 20;
    this.address = {
      street: '221B Baker Street',
      city: 'London'
    };
    this.book = {
      name: 'I Robot',
      price: 15,
      available: true
    };
    this.hobbies = ['swimming', 'read', 'run'];
    this.computers = [
      {name: 'Laptop', price: 500, available: true},
      {name: 'keyboard', price: 30, available: true}
    ];
  }

  ngOnInit() {
  }

}

interface Product {
  name: string;
  price: number;
  available: boolean;
}
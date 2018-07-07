import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  user: {
    name: String;
    age: Number;
    address: {
      street: string,
      city: string
    };
  }
  constructor() {
    this.user = {
      name: 'Joe',
      age: 30,
      address: {
        street: "221B Baker Street",
        city: "London"
      }
    }
  }

  ngOnInit() {
  }

}

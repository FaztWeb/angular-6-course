import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bucle-for',
  templateUrl: './bucle-for.component.html',
  styleUrls: ['./bucle-for.component.css']
})
export class BucleForComponent implements OnInit {
  names: String[];

  constructor() {
    this.names = ['Joe', 'Ryan', 'Cameron'];
  }

  ngOnInit() {
  }

}

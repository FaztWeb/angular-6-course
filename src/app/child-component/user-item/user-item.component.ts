import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() product: String;
  
  constructor() { }

  ngOnInit() {
  }

}

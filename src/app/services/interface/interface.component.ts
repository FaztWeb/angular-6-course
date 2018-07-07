import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'service',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  posts: Post[];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}


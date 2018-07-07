import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  users: string[] = ['ryan', 'joe', 'cameron'];
  constructor() { }

  ngOnInit() {
  }

  greet() {
    alert('Hello!');
  }

  addUser() {
    this.users.push('Gordon');
  }

  sendUser(newUser: HTMLInputElement): boolean {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  deleteUser(user: string) {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[0] == user) {
        this.users.splice(i, 1);
      }
    }
  }
}

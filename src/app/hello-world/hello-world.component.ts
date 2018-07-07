import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: '<h1 class="title">{{title}}</h1>',
    styles: ['.title {color: #fff; background: red;}']
})
export class HelloWorld {
    title = 'Hello World'; // Propertie
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  comments = [
  	{message:'first comment!', author: 'you'},
    {message: 'nice work!', author: 'your mom'},
    {message: 'I would also like to congratulate you!', author: 'your dad'}
  ];

  constructor() { }


}


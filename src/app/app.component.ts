import { Component, NgModule } from '@angular/core';

class quote {
	update: false;
	message: string;
	author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	updateMessage;
	updateAuthor;
	newQuote: quote;

	constructor() { 
		this.newQuote = new quote();
	}

  comments = [
  	{update:false, message:'first comment!', author: 'you'},
    {update:false, message: 'nice work!', author: 'your mom'},
    {update:false, message: 'I would also like to congratulate you!', author: 'Marley'}
  ];

  onSubmit() {
  	if(this.newQuote) {
  		var entry = {
  			'update': false,
  			'message': this.newQuote.message,
  			'author': this.newQuote.author
  		};
  	this.comments.push(entry);	
  	}
  }

  onDelete(i) {
  	this.comments.splice(i,1);
  }

  onUpdate(i) {
  	this.comments[i].update = false;
  	this.comments[i].message = this.updateMessage;
  	this.comments[i].author = this.updateAuthor;
  }

}


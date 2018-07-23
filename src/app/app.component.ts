import { Component } from '@angular/core';

declare var frest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    console.log('testing...');
    var urls = ['https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2',
      'https://jsonplaceholder.typicode.com/posts/3'];
    var result = frest.getAll(urls);
    result.then(response => {
      console.log('frest response...');
      console.log(response);
    });
  }
}

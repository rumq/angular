import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Using Inline Template
  // templateUrl: './app.component.html',
  template: `<h1> The title is {{title}} </h1>`,

  // styleUrls: ['./app.component.css']
  // Using Inline Style
  styles: [`h1 { color: red; }`]
})
export class AppComponent {
  title = 'DemoApp by Vikram';
}

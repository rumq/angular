import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1> The title is {{title}} </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp by Vikram';
}

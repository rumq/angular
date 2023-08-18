import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-pipes',
  templateUrl: './simple-pipes.component.html',
  styleUrls: ['./simple-pipes.component.css'],
})

export class SimplePipesComponent {
  today: string | number | Date;
  name: string = 'angular framework';
  jsonval: object = {
    name: 'Alex',
    age: '25',
    address: { a1: 'Paris', a2: 'France' },
  };
  height: number = 0.123456789;
  salary: number;


  constructor() {
    this.today = new Date();
    this.salary = 12345.6789;

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-pipes',
  templateUrl: './simple-pipes.component.html',
  styleUrls: ['./simple-pipes.component.css']
})
export class SimplePipesComponent {

  name: string;
  team: string;
  rating: number;
  salary: number;
  email: string;
  timestamp: Date;
  additionalInfo: any;
  
  constructor() {
    this.name = 'Michu';
    this.team = 'swansea city';
    this.rating = 0.9874754654;
    this.salary = 1500000.99; 
    this.email = 'michu@example.com';
    this.timestamp = new Date();
    this.additionalInfo = {
      nationality: 'Spain',
      age: 35,
      height: 1.83,
      car: 'Bugatti'
    };
  }
}

import { Component } from '@angular/core';

class Car {
  constructor(public make: string, public model: string, public year: number) {}
}

@Component({
  selector: 'app-data-binding-syntax',
  templateUrl: './data-binding-syntax.component.html',
  styleUrls: ['./data-binding-syntax.component.css'],
})
export class DataBindingSyntaxComponent {
  firstName: string;
  lastName: string;
  nationality: string;
  emailAddress: string;
  companyCar?: Car;
  salary: number;
  verbose: boolean;

  constructor() {
    this.firstName = 'Amitabh';
    this.lastName = 'Bachchan';
    this.nationality = 'Indian';
    this.emailAddress = 'amitabh.bachchan@gmail.com';
    this.companyCar = new Car('BMW', 'X5', 2019);
    this.salary = 100000;
    this.verbose = true;
  }
  label() {
    return this.verbose ? 'Show Brief' : 'Show Verbose';
  }

  toggle() {
    this.verbose = !this.verbose;
  }
}

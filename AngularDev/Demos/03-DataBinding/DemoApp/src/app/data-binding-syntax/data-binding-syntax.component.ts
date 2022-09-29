import { Component } from '@angular/core';

class Car {
  constructor(public make: string, public model: string) {}
}

@Component({
  selector: 'app-data-binding-syntax',
  templateUrl: './data-binding-syntax.component.html',
  styleUrls: ['./data-binding-syntax.component.css']
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
    this.firstName = 'Ola';
    this.lastName = 'Nordmann';
    this.nationality = 'Norsk';
    this.emailAddress = 'ola.nordmann@mydomain.com';
    this.companyCar = new Car('Bugatti', 'Chiron');   // Or could be "undefined"
    this.salary = 55000;		
    this.verbose = true;
  }

  label() {
    return (this.verbose) ? 'Show brief details' : 'Show verbose details';
  }

  onVerboseToggle(event: any) {
    this.verbose = !this.verbose;
    console.log('Event handler invoked on element ' + event.target);
  }
}
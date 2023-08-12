import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-then-else',
  templateUrl: './ng-if-then-else.component.html',
  styleUrls: ['./ng-if-then-else.component.css']
})
export class NgIfThenElseComponent {
  firstName: string;
  lastName: string;
  nationality: string;
  emailAddress: string;
  salary: number;

  constructor() {
    this.firstName = 'Amitabh';
    this.lastName = 'Bachchan';
    this.nationality = 'Indian';
    this.emailAddress = 'amitabh.bachan@gmail.com';
    this.salary = 30000;
  }

  payRise() {
    this.salary = this.salary + 4000;
  }

}

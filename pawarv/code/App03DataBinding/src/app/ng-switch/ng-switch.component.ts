import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  firstName: string;
  lastName: string;
  nationality: string;
  emailAddress: string;
  salary: number;
  skills: Array<string>;

  constructor() {
    this.firstName = 'Amitabh';
    this.lastName = 'Bachchan';
    // this.nationality = 'Indian';
    // this.nationality = 'UK';
    this.nationality = 'UNKNOWN';
    this.emailAddress = 'amitabh.bachan@gmail.com';
    this.salary = 30000;
    this.skills = ['Java', 'MQ', 'AWS'];
  }

  payRise() {
    this.salary = this.salary + 4000;
  }
}

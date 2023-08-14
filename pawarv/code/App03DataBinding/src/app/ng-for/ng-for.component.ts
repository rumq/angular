import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  firstName: string;
  lastName: string;
  nationality: string;
  emailAddress: string;
  salary: number;
  skills: Array<string>;

  constructor() {
    this.firstName = 'Amitabh';
    this.lastName = 'Bachchan';
    this.nationality = 'Indian';
    this.emailAddress = 'amitabh.bachan@gmail.com';
    this.salary = 30000;
    this.skills = ['Java', 'MQ', 'AWS'];
  }

  payRise() {
    this.salary = this.salary + 4000;
  }

}

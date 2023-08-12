import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

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
    this.salary = 100000;
  }

  payRise() {
    this.salary += 10000;
  }

  onSalaryChange($event: any) {
    this.salary = $event.target.value;
    }

}

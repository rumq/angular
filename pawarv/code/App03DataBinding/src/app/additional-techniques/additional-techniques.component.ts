import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-techniques',
  templateUrl: './additional-techniques.component.html',
  styleUrls: ['./additional-techniques.component.css'],
})
export class AdditionalTechniquesComponent {
  name = 'Amitabh Bacchan';
  skills = 'Skills :';

  addSkill(skill: HTMLInputElement) {
    // get the value from the html input and set the data component
    this.skills += skill.value + ' ';
    // reset the html input field
    skill.value = '';
    skill.focus();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-techniques',
  templateUrl: './additional-techniques.component.html',
  styleUrls: ['./additional-techniques.component.css']
})
export class AdditionalTechniquesComponent {

  name = "Kari Nordmann";
  skills = "";

  addSkill(newSkill: HTMLInputElement) {
    this.skills += newSkill.value + " ";
    newSkill.value = "";
    newSkill.focus();
  }
}

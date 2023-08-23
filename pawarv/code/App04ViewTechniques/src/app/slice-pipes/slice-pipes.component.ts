import {Component} from '@angular/core';

@Component({
  selector: 'app-slice-pipes',
  templateUrl: './slice-pipes.component.html',
  styleUrls: ['./slice-pipes.component.css']
})

export class SlicePipesComponent {

  skills: Array<string>;




  constructor() {
    this.skills = ['1.English', '2.Spanish', '3.Hindi', '4.Tamil', '5.Telugu']
  }

}

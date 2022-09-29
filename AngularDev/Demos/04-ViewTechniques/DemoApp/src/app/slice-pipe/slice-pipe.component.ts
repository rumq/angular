import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styleUrls: ['./slice-pipe.component.css']
})
export class SlicePipeComponent {

  skills: Array<string>;
    
  constructor() {
    this.skills = ['Java', 'C#', 'HTML5', 'TypeScript', 'Angular'];
  }

}

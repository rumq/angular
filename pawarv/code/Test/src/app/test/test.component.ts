import { Component, ViewChild } from '@angular/core';
import { BesrCreateModalComponent } from '../besr-create-modal/besr-create-modal.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @ViewChild('besrCreateModal') besrCreateModal!: BesrCreateModalComponent;

  createBesr() {
    console.log('TestComponent: createBesr()');
    this.besrCreateModal.show();
  }
}

import { Component, ViewChild } from '@angular/core';
import { BesrCreateModalComponent } from '../besr-create-modal/besr-create-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @ViewChild('besrCreateModal') besrCreateModal!: BesrCreateModalComponent;
  protected besrCreateModalConfirmSubs!: Subscription;

  createBesr() {
    console.log('TestComponent: createBesr()');

    if (this.besrCreateModalConfirmSubs) {
      this.besrCreateModalConfirmSubs.unsubscribe();
    }

    this.besrCreateModalConfirmSubs = this.besrCreateModal.onConfirm.subscribe( modal => {
      console.log('TestComponent: callback after confirm is clicked');
    });

    this.besrCreateModal.show();

  }
}

import { Component, OnDestroy, ViewChild } from '@angular/core';
import { BesrCreateModalComponent } from '../besr-create-modal/besr-create-modal.component';
import { Subscription, first } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnDestroy {
  ngOnDestroy(): void {
    if (this.besrCreateModalConfirmSubs) {
      this.besrCreateModalConfirmSubs.unsubscribe();
    }
  }

  @ViewChild('besrCreateModal') besrCreateModal!: BesrCreateModalComponent;
  protected besrCreateModalConfirmSubs!: Subscription;

  createBesr() {
    console.log('TestComponent: createBesr()');

    if (this.besrCreateModalConfirmSubs) {
      this.besrCreateModalConfirmSubs.unsubscribe();
    }

    this.besrCreateModalConfirmSubs = this.besrCreateModal.onConfirm
      .pipe(first())
      .subscribe(modal => {
        console.log('TestComponent: callback after confirm is clicked');
        modal.disableActions = true;
      });

    this.besrCreateModal.show();

    return;
  }
}

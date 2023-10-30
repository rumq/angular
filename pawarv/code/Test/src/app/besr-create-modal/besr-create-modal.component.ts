import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-besr-create-modal',
  templateUrl: './besr-create-modal.component.html',
  styleUrls: ['./besr-create-modal.component.css'],
})
export class BesrCreateModalComponent {
  @ViewChild('modal', { static: true }) private modal!: ModalDirective;

  private onShowStream!: Subject<BesrCreateModalComponent>;
  private onConfirmStream!: Subject<BesrCreateModalComponent>;



  public show() {

    if (!this.modal.isShown) {
      console.log('BesrCreateModalComponent: show()');
      this.modal.show();
    }
    this.onShowStream.next(this);
  }
  constructor() {
    this.onShowStream = new Subject<BesrCreateModalComponent>();
    this.onConfirmStream = new Subject<BesrCreateModalComponent>();
  }

  confirm() {
    console.log('BesrCreateModalComponent: confirm()');
    if (this.modal.isShown) {
      this.onConfirmStream.next(this);
    }
  }

  public get onConfirm() {
    console.log('BesrCreateModalComponent: onConfirm() - subscribe what to do onConfirm');
    return this.onConfirmStream.asObservable();
  }


}

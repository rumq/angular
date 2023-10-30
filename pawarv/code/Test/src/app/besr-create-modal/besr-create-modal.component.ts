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

  public show() {
    console.log('clicked show');
    
    if (!this.modal.isShown) {
      console.log('showing modal');
      this.modal.show();
    }
    this.onShowStream.next(this);
  }
  constructor() {
    this.onShowStream = new Subject<BesrCreateModalComponent>();
  }
}

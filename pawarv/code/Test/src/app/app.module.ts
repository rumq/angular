import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SharkDirective } from './shark.directive';
import { BesrCreateModalComponent } from './besr-create-modal/besr-create-modal.component';
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SharkDirective,
    BesrCreateModalComponent
  ],
    imports: [
        BrowserModule,
        ModalModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

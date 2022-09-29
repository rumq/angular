import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingSyntaxComponent } from './data-binding-syntax/data-binding-syntax.component';
import { HomeComponent } from './home/home.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AdditionalTechniquesComponent } from './additional-techniques/additional-techniques.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfThenElseComponent } from './ng-if-then-else/ng-if-then-else.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingSyntaxComponent,
    HomeComponent,
    TwoWayBindingComponent,
    AdditionalTechniquesComponent,
    NgIfComponent,
    NgIfThenElseComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

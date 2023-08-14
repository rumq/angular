import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingSyntaxComponent } from './data-binding-syntax/data-binding-syntax.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfThenElseComponent } from './ng-if-then-else/ng-if-then-else.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { AdditionalTechniquesComponent } from './additional-techniques/additional-techniques.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataBindingSyntaxComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgIfThenElseComponent,
    NgForComponent,
    NgSwitchComponent,
    AdditionalTechniquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

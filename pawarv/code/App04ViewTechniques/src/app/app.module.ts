import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplePipesComponent } from './simple-pipes/simple-pipes.component';
import { SlicePipesComponent } from './slice-pipes/slice-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplePipesComponent,
    SlicePipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

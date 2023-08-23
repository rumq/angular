import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplePipesComponent } from './simple-pipes/simple-pipes.component';
import {SlicePipesComponent} from "./slice-pipes/slice-pipes.component";

const routes: Routes = [
  { path: '', component: SimplePipesComponent },
  { path: 'simple-pipes', component: SimplePipesComponent },
  { path: 'slice-pipes', component: SlicePipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

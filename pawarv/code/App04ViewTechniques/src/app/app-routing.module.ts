import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplePipesComponent } from './simple-pipes/simple-pipes.component';

const routes: Routes = [
  { path: '', component: SimplePipesComponent },
  { path: 'simple-pipes', component: SimplePipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

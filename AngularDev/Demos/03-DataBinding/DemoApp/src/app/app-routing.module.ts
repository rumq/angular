import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingSyntaxComponent } from './data-binding-syntax/data-binding-syntax.component'
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component'
import { AdditionalTechniquesComponent } from './additional-techniques/additional-techniques.component'
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfThenElseComponent } from './ng-if-then-else/ng-if-then-else.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-binding-syntax', component: DataBindingSyntaxComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'ng-if', component: NgIfComponent },
  { path: 'ng-if-then-else', component: NgIfThenElseComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'additional-techniques', component: AdditionalTechniquesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

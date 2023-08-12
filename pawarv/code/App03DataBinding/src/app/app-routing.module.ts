import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingSyntaxComponent } from './data-binding-syntax/data-binding-syntax.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'data-binding-syntax', component: DataBindingSyntaxComponent},
  { path: 'two-way-binding', component: TwoWayBindingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

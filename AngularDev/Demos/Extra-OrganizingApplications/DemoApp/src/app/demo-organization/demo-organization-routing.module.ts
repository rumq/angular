import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';

const routes: Routes = [
  { path: '', component: GreetingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoOrganizationRoutingModule {}

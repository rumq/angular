import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { DemoOrganizationRoutingModule } from './demo-organization-routing.module';

@NgModule({
  imports: [CommonModule, DemoOrganizationRoutingModule],
  declarations: [GreetingComponent],
})
export class DemoOrganizationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentHierarchyRoutingModule } from './demo-component-hierarchy-routing.module'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, DemoComponentHierarchyRoutingModule],
  declarations: [HeaderComponent, FooterComponent, MainComponent],
})
export class DemoComponentHierarchyModule { }

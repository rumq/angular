import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentOutputsRoutingModule } from './demo-component-outputs-routing.module'
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [CommonModule, DemoComponentOutputsRoutingModule],
  declarations: [ProductListComponent, ProductItemComponent],
})
export class DemoComponentOutputsModule { }

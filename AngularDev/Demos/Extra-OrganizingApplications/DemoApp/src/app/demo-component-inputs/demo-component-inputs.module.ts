import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentInputsRoutingModule } from './demo-component-inputs-routing.module'
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [CommonModule, DemoComponentInputsRoutingModule],
  declarations: [ProductListComponent, ProductItemComponent],
})
export class DemoComponentInputsModule { }

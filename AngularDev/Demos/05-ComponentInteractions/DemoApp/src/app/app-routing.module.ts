import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { GreetingComponent } from './greeting/greeting.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductListWithSalesComponent } from './product-list-with-sales/product-list-with-sales.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'component-hierarchy', component: GreetingComponent },
  { path: 'component-inputs', component: ProductListComponent },
  { path: 'component-outputs', component: ProductListWithSalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

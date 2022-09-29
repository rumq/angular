import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemWithSalesComponent } from './product-item-with-sales/product-item-with-sales.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListWithSalesComponent } from './product-list-with-sales/product-list-with-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreetingComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    ProductItemWithSalesComponent,
    ProductListComponent,
    ProductListWithSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

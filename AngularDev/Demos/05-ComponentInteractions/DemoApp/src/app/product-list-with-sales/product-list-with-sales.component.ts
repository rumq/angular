import { Component } from '@angular/core';
import { ProductService } from '../product-service'
import { Product } from '../product'
import { ISale } from '../product-item-with-sales/product-item-with-sales.component'

@Component({
  selector: 'app-product-list-with-sales',
  templateUrl: './product-list-with-sales.component.html',
  styleUrls: ['./product-list-with-sales.component.css']
})
export class ProductListWithSalesComponent {

  products: Array<Product> = []; 
  sales: Array<string> = [];

  constructor() { 
      let productService = new ProductService();
      this.products = productService.getProducts(); 
  }

  onSale(event: ISale) {
      let msg:string = event.productDescription + ' [' + event.quantity + ']';
      this.sales.push(msg);
  }
}

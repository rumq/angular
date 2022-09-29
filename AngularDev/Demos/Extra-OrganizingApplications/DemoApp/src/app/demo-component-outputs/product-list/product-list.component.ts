import { Component } from '@angular/core';
import { ProductService } from '../product-service'
import { Product } from '../product'
import { ISale } from '../product-item/product-item.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

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

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<Product>; 

  constructor(productService: ProductService) { 
      this.products = productService.getProducts(); 
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductViaRestService } from '../product-via-rest.service'
import { Product } from '../product'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-via-rest',
  templateUrl: './product-list-via-rest.component.html',
  styleUrls: ['./product-list-via-rest.component.css']
})
export class ProductListViaRestComponent implements OnInit {

  productsTechnique1!: Observable<Array<Product>>; 
  productsTechnique2!: Array<Product>;

  constructor(private productViaRestService: ProductViaRestService) {}

  ngOnInit(): void {
    // Get products, technique 1 - just assign the Observable result directly.
    this.productsTechnique1 = this.productViaRestService.getProducts();
    
    // Get product, technique 2 - subscribe to the service.
    this.productViaRestService.getProducts().subscribe({
        next: (data:any) => this.productsTechnique2 = data,
        error: (_:any)  => console.log("Error")
    });
  }
}

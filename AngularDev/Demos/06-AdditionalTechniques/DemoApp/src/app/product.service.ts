import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Array<Product> {
    var products: Array<Product> = [
        new Product('Swansea City shirt', 'Leisure wear', 45),
        new Product('Cardiff City shirt', 'Leisure wear', 55),
        new Product('Bugatti Divo', 'Auto', 2000000),
        new Product('65 inch UHDTV', 'TV/Audio', 1800),
        new Product('Carving skis', 'Sports equipment', 350),
        new Product('Ski boots', 'Sports equipment', 150)
    ];
    return products;
}
}

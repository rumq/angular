import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductViaRestService {

  private baseUrl = 'http://localhost:8080/api/products';  
  
  constructor(private http: HttpClient) {} 
  
  getProducts(): Observable<Array<Product>> {
    return this.http.get(this.baseUrl) as Observable<Array<Product>>;
  }
}

import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

// Define a class to represent a single product.
class Product {
  constructor(
    public description?: string, 
    public category?: string, 
    public lowPrice?: number,
    public highPrice?: number,
  ) {}
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  productForm: FormGroup;
  products: Array<Product> = [];

  constructor() {
		// A FormGroup tracks the value/validity of a group of FormControl instances.
		// The constructor takes an object of controlName:FormControl pairs.
		
		// A FormControl has initial state, and a collection of validators.
		
		// The Validators class has properties for the different types of Angular validation:
		//   - Validators.min, Validators.max
		//   - Validators.minLength, Validators.maxLength
		//   - Validators.required, Validators.requiredTrue
		//   - Validators.email, Validators.pattern
		// For full details, see https://angular.io/api/forms/Validators.
		
    this.productForm = new FormGroup({
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      pricePolicy: new FormGroup({
          lowPrice: new FormControl('', Validators.min(1)),
          highPrice: new FormControl('', Validators.min(10))
      })
    });
  }

  onSubmit(form: FormGroup) { 
    let product = new Product(
        form['controls']['description'].value,
        form['controls']['category'].value,
        form['controls']['pricePolicy'].get('lowPrice')?.value,
        form['controls']['pricePolicy'].get('highPrice')?.value)
    this.products.push(product);
    form.reset();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemWithSalesComponent } from './product-item-with-sales.component';

describe('ProductItemWithSalesComponent', () => {
  let component: ProductItemWithSalesComponent;
  let fixture: ComponentFixture<ProductItemWithSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemWithSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemWithSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

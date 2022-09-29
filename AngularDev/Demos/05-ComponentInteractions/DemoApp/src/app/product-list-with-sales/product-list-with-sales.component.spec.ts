import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListWithSalesComponent } from './product-list-with-sales.component';

describe('ProductListWithSalesComponent', () => {
  let component: ProductListWithSalesComponent;
  let fixture: ComponentFixture<ProductListWithSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListWithSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListWithSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

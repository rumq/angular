import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListViaRestComponent } from './product-list-via-rest.component';

describe('ProductListViaRestComponent', () => {
  let component: ProductListViaRestComponent;
  let fixture: ComponentFixture<ProductListViaRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListViaRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListViaRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

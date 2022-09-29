import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePipesComponent } from './simple-pipes.component';

describe('SimplePipesComponent', () => {
  let component: SimplePipesComponent;
  let fixture: ComponentFixture<SimplePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicePipesComponent } from './slice-pipes.component';

describe('SlicePipesComponent', () => {
  let component: SlicePipesComponent;
  let fixture: ComponentFixture<SlicePipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlicePipesComponent]
    });
    fixture = TestBed.createComponent(SlicePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

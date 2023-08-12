import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfThenElseComponent } from './ng-if-then-else.component';

describe('NgIfThenElseComponent', () => {
  let component: NgIfThenElseComponent;
  let fixture: ComponentFixture<NgIfThenElseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfThenElseComponent]
    });
    fixture = TestBed.createComponent(NgIfThenElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

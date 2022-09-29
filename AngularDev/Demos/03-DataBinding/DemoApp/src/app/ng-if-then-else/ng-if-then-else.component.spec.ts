import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfThenElseComponent } from './ng-if-then-else.component';

describe('NgIfThenElseComponent', () => {
  let component: NgIfThenElseComponent;
  let fixture: ComponentFixture<NgIfThenElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfThenElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfThenElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicePipeComponent } from './slice-pipe.component';

describe('SlicePipeComponent', () => {
  let component: SlicePipeComponent;
  let fixture: ComponentFixture<SlicePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlicePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

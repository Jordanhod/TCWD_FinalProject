import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLineComponent } from './review-line.component';

describe('ReviewLineComponent', () => {
  let component: ReviewLineComponent;
  let fixture: ComponentFixture<ReviewLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

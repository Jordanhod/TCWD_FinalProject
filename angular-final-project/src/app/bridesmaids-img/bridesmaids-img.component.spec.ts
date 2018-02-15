import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesmaidsMainComponent } from './bridesmaids-main.component';

describe('BridesmaidsMainComponent', () => {
  let component: BridesmaidsMainComponent;
  let fixture: ComponentFixture<BridesmaidsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesmaidsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesmaidsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

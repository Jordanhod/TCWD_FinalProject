import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesmaidsPageComponent } from './bridesmaids-page.component';

describe('BridesmaidsPageComponent', () => {
  let component: BridesmaidsPageComponent;
  let fixture: ComponentFixture<BridesmaidsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesmaidsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesmaidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesmaidsProductPageComponent } from './bridesmaids-product-page.component';

describe('BridesmaidsProductPageComponent', () => {
  let component: BridesmaidsProductPageComponent;
  let fixture: ComponentFixture<BridesmaidsProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesmaidsProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesmaidsProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

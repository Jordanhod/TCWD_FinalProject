import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesProductPageComponent } from './brides-product-page.component';

describe('BridesProductPageComponent', () => {
  let component: BridesProductPageComponent;
  let fixture: ComponentFixture<BridesProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

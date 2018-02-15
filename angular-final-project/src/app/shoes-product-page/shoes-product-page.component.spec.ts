import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesProductPageComponent } from './shoes-product-page.component';

describe('ShoesProductPageComponent', () => {
  let component: ShoesProductPageComponent;
  let fixture: ComponentFixture<ShoesProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

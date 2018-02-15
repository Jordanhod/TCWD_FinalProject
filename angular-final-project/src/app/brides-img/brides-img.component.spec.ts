import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMainImgComponent } from './product-main-img.component';

describe('ProductMainImgComponent', () => {
  let component: ProductMainImgComponent;
  let fixture: ComponentFixture<ProductMainImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMainImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMainImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

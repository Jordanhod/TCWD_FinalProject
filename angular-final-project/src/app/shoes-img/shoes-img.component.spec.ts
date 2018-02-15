import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesImgComponent } from './shoes-img.component';

describe('ShoesImgComponent', () => {
  let component: ShoesImgComponent;
  let fixture: ComponentFixture<ShoesImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

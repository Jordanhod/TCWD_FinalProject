import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesPageComponent } from './brides-page.component';

describe('BridesPageComponent', () => {
  let component: BridesPageComponent;
  let fixture: ComponentFixture<BridesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCouponByEndDateComponent } from './get-coupon-by-end-date.component';

describe('GetCouponByEndDateComponent', () => {
  let component: GetCouponByEndDateComponent;
  let fixture: ComponentFixture<GetCouponByEndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCouponByEndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCouponByEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

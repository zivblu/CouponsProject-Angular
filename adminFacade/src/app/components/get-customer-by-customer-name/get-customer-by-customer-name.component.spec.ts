import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerByCustomerNameComponent } from './get-customer-by-customer-name.component';

describe('GetCustomerByCustomerNameComponent', () => {
  let component: GetCustomerByCustomerNameComponent;
  let fixture: ComponentFixture<GetCustomerByCustomerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerByCustomerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerByCustomerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

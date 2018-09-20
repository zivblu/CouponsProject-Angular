import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyByCompanyNameComponent } from './get-company-by-company-name.component';

describe('GetCompanyByCompanyNameComponent', () => {
  let component: GetCompanyByCompanyNameComponent;
  let fixture: ComponentFixture<GetCompanyByCompanyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyByCompanyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyByCompanyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

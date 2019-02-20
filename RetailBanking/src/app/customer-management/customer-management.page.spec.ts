import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManagementPage } from './customer-management.page';

describe('CustomerManagementPage', () => {
  let component: CustomerManagementPage;
  let fixture: ComponentFixture<CustomerManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

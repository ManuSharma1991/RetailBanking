import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionManagementPage } from './transaction-management.page';

describe('TransactionManagementPage', () => {
  let component: TransactionManagementPage;
  let fixture: ComponentFixture<TransactionManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

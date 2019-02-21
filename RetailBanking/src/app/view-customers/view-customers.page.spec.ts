import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomersPage } from './view-customers.page';

describe('ViewCustomersPage', () => {
  let component: ViewCustomersPage;
  let fixture: ComponentFixture<ViewCustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

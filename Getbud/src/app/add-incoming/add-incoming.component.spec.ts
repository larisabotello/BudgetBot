import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncomingPage } from './add-incoming.page';

describe('AddIncomingPage', () => {
  let component: AddIncomingPage;
  let fixture: ComponentFixture<AddIncomingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncomingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncomingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

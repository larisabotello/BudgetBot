import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetComponent } from './budget.component';

describe('BudgetPage', () => {
  let component: BudgetComponent;
  let fixture: ComponentFixture<BudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

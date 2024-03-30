/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavOrderingComponent } from './nav-ordering.component';

describe('NavOrderingComponent', () => {
  let component: NavOrderingComponent;
  let fixture: ComponentFixture<NavOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

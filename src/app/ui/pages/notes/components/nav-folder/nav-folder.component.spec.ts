/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavFolderComponent } from './nav-folder.component';

describe('NavFolderComponent', () => {
  let component: NavFolderComponent;
  let fixture: ComponentFixture<NavFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

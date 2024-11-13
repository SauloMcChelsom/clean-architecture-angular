/*
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'Drawer',
  template: `
    <mat-drawer-container [hasBackdrop]="hasBackdrop.value">
      <mat-drawer #drawer [mode]="mode.value">I'm a drawer</mat-drawer>
      <mat-drawer-content>

        <mat-form-field>
          <mat-label>Sidenav mode</mat-label>
          <mat-select #mode value="side">
            <mat-option value="side">Side</mat-option>
            <mat-option value="over">Over</mat-option>
            <mat-option value="push">Push</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Has backdrop</mat-label>
          <mat-select #hasBackdrop>
            <mat-option>Unset</mat-option>
            <mat-option [value]="true">True</mat-option>
            <mat-option [value]="false">False</mat-option>
          </mat-select>
        </mat-form-field>
        <button mat-raised-button (click)="openToggleDrawer()">Toggle drawer</button>

      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class DrawerComponent {
  openToggleDrawer(){}
  
}*/

import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, OnInit } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { DrawerService } from './drawer.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'Drawer',
  template: `
    <mat-drawer-container>
      <mat-drawer #drawer mode="side" [(opened)]="isOpen">
        <ng-container #drawerContent></ng-container>
      </mat-drawer>
      <mat-drawer-content>
        <ng-content></ng-content>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports:[
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule
  ]
})
export class DrawerComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatSidenav;
  @ViewChild('drawerContent', { read: ViewContainerRef }) drawerContent!: ViewContainerRef;
  isOpen = false;

  constructor(
    private drawerService: DrawerService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.drawerService.setDrawer(this.drawer);
  }

  openComponent<T>(component: Type<T>, data: any = null): void {
    this.drawerContent.clear();
    const componentFactory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.drawerContent.createComponent(componentFactory);
    console.log('->')
    this.drawer.open();
  }

  closeDrawer(): void {
    this.drawer.close();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Injectable, Type, ViewChild, ViewContainerRef, Output, EventEmitter, ComponentRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawer?: MatSidenav;
  private drawerContent?: ViewContainerRef;

  setDrawer(drawer: MatSidenav, drawerContent: ViewContainerRef) {
    this.drawer = drawer;
    this.drawerContent = drawerContent;
  }

  open(component: Type<any>, data: { [key: string]: any } = {}) {
    if (this.drawer && this.drawerContent) {
      this.drawer.open();
      this.drawerContent.clear();
      const componentRef = this.drawerContent.createComponent(component);

      // Atribui os dados ao componente dinâmico
      Object.assign(componentRef.instance, data);
    } else {
      console.error("Drawer ou DrawerContent não foram inicializados.");
    }
  }

  close() {
    this.drawer?.close();
    this.drawerContent?.clear();
  }
}

@Component({
  selector: 'drawer',
  template: `
    <mat-drawer-container [hasBackdrop]="true" style="height: 200px;">
      <mat-drawer #drawer mode="over" [(opened)]="isOpen">
        <ng-container #drawerContent></ng-container>
      </mat-drawer>
      <mat-drawer-content>
        <ng-content></ng-content>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrls:['./drawer-showcase.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class DrawerComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatSidenav;
  @ViewChild('drawerContent', { read: ViewContainerRef }) drawerContent!: ViewContainerRef;
  isOpen = false;

  constructor(private drawerService: DrawerService) {}

  ngOnInit() {
    this.drawerService.setDrawer(this.drawer, this.drawerContent);
  }

  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer, this.drawerContent);
  }

  closeDrawer() {
    this.drawerService.close();
  }

  close() {
    this.isOpen = false;
  }
}

@Component({
  selector: 'app-custom-drawer-content',
  template: `
    <h1 mat-dialog-title>Hi {{name}}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <mat-label>Favorite Animal</mat-label>
        <input matInput [(ngModel)]="animal">
      </mat-form-field>
    </div>
    <button mat-button (click)="onSubmit()">Enviar</button>
    <button mat-button (click)="onCancel()">Cancelar</button>
  `,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule]
})
export class CustomDrawerContentComponent {
  @Input() name!: string;
  @Input() animal!: string;

  @Input() outputEmitter!: EventEmitter<string>;
  @Input() onCancelEmitter!: EventEmitter<boolean>;

  constructor(private drawerService: DrawerService) {}

  onSubmit(): void {
    if (this.outputEmitter) {
      this.outputEmitter.emit(this.animal);
    }
  }

  onCancel() {
    this.drawerService.close();
    this.onCancelEmitter.emit(true)
  }
}

@Component({
  selector: 'app-drawer-showcase',
  template: `
    <drawer></drawer>
    <button (click)="openDrawer()">Abrir Drawer</button>
    <button (click)="closeDrawer()">Fechar Drawer</button>
  `,
  standalone: true,
  imports: [DrawerComponent]
})
export class DrawerShowcaseComponent {
  @ViewChild(DrawerComponent) component!: DrawerComponent;

  outputEmitter = new EventEmitter<string>();
  onCancelEmitter = new EventEmitter<string>();

  constructor(private drawerService: DrawerService) {
    this.outputEmitter.subscribe((value) => {
      console.log('Evento recebido do componente dinâmico:', value);
    });

    this.onCancelEmitter.subscribe((value) => {
      console.log('Evento recebido do componente dinâmico:', value);
    });
  }

  openDrawer() {
    this.drawerService.open(CustomDrawerContentComponent, {
      name: 'Saulo',
      animal: 'Gato',
      outputEmitter: this.outputEmitter,
      onCancelEmitter: this.onCancelEmitter
    });
  }

  closeDrawer() {
    this.component.close();
  }
}
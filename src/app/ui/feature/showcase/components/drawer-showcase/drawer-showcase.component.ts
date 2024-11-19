import { Component, EventEmitter, ViewChild } from '@angular/core';
import { DrawerComponent } from 'src/app/ui/components/drawer/drawer.component';
import { DrawerService } from 'src/app/ui/components/drawer/drawer.service';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-drawer-showcase',
  templateUrl: './drawer-showcase.component.html',
  standalone: true,
  imports: [
    DrawerComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf
  ]
})
export class DrawerShowcaseComponent {
  animal!: string;
  name!: string;
  @ViewChild(DrawerComponent) component!: DrawerComponent;

  outputEmitter = new EventEmitter<string>();
  onCancelEmitter = new EventEmitter<string>();

  constructor(private drawerService: DrawerService) {
    this.outputEmitter.subscribe((value) => {
      this.animal = value;
      this.closeDrawer()
    });

    this.onCancelEmitter.subscribe((value) => {
      this.closeDrawer()
    });
  }

  openDrawer() {
    this.drawerService.open(PageComponent, {
      name: this.name,
      animal: this.animal,
      outputEmitter: this.outputEmitter,
      onCancelEmitter: this.onCancelEmitter
    });
  }

  closeDrawer() {
    this.component.close();
  }
}
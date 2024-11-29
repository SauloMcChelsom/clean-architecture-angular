import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class DrawerComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatSidenav;
  @ViewChild('drawerContent', { read: ViewContainerRef }) drawerContent!: ViewContainerRef;
  isOpen = false;

  constructor(private drawerService: DrawerService) { }

  ngOnInit() {
    this.drawerService.setDrawer(this.drawer, this.drawerContent);
  }

  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer, this.drawerContent);
  }

  closeDrawer() {
    this.drawerService.close();
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
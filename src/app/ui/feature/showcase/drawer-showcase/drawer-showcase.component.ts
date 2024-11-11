import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DrawerComponent } from 'src/app/ui/components/drawer/drawer.component';

@Component({
  selector: 'app-drawer-showcase',
  templateUrl: './drawer-showcase.component.html',
  styleUrls: ['./drawer-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DrawerComponent
  ]
})
export class DrawerShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

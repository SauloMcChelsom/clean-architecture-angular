import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { CommonModule, NgFor, NgIf } from '@angular/common';

interface MenuItem {
  label: string;
  icon?: string;
  disabled?: boolean;
  children?: MenuItem[];
  cod: string
}

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class MenuComponent {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Input() mainMenuLabel: string = 'Menu';
  @Input() menuItems: MenuItem[] = [];

  @ViewChild('menu', { static: true }) menu!: MatMenu;

  protected onClickEvent(cod:string) {
    this.onSelect.emit(cod);
  }
}

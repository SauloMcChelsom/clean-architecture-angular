import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from 'src/app/ui/components/menu/menu.component';

@Component({
  selector: 'app-menu-showcase',
  templateUrl: './menu-showcase.component.html',
  styleUrls: ['./menu-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MenuShowcaseComponent implements OnInit {
  codes = [
    `
    import { MenuComponent } from 'src/app/ui/components/menu/menu.component';
    `,
    `
    <Menu
      [mainMenuLabel]="'Options'"
      [menuItems]="menuOptions"
      #dynamicMenu
      (onSelect)="onSelect($event)"
    >
    </Menu>
    `,
    `
    menuOptions: any = [
      { label: 'Item 1', icon: 'home', cod: 'item1' },
      { label: 'Item 2', icon: 'settings', disabled: true, cod: 'item2' },
      {
        label: 'Animals', children: [
          { label: 'Gato', cod: 'Animals/Gato' },
          { label: 'Cachorro', cod: 'Animals/Cachorro' }
        ]
      }
    ];
    `,
    `
    
    `,
  ];
  constructor() { }

  ngOnInit() {
  }

  selected = ''

  menuOptions: any = [
    { label: 'Item 1', icon: 'home', cod: 'item1' },
    { label: 'Item 2', icon: 'settings', disabled: true, cod: 'item2' },
    {
      label: 'Animals', children: [
        { label: 'Gato', cod: 'Animals/Gato' },
        { label: 'Cachorro', cod: 'Animals/Cachorro' }
      ]
    }
  ];

  onSelect($event: string) {
    this.selected = $event;

    if (this.selected == 'Animals/Gato') {
      setTimeout(() => {
        this.menuOptions = [
          { label: 'Item 1', icon: 'home', cod: 'item1' },
          { label: 'Item 2', icon: 'settings', cod: 'item2' },
          {
            label: 'Animals', children: [
              { label: 'Gato', cod: 'Animals/Gato' },
              { label: 'Cachorro', cod: 'Animals/Cachorro' }
            ]
          }
        ];
      })
    }
  }
}

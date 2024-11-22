import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ItemCoolComponent } from '../../../components/list-item/item-cool/item-cool.component';
import { NavListColumnComponent } from '../../../components/list-item/nav-list-column/nav-list-column.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ItemCoolComponent,
    MatIconModule,
    MatButtonModule,
    NavListColumnComponent,
    MatListModule,
  ]
})
export class ShowcaseComponent {
  public menus = [
    {
      routerLink: '/showcase/bottom-sheet',
      text: 'Bottom Sheet'
    },
    {
      routerLink: '/showcase/button-basic',
      text: 'Button Basic'
    },
    {
      routerLink: '/showcase/button-cancat',
      text: 'Button Cancat'
    },
    {
      routerLink: '/showcase/button-fab',
      text: 'Button FAB'
    },
    {
      routerLink: '/showcase/button-flat',
      text: 'Button Flat'
    },
    {
      routerLink: '/showcase/button-icon',
      text: 'Button Icon'
    },
    {
      routerLink: '/showcase/button-icon-spinner',
      text: 'Button Icon Spinner'
    },
    {
      routerLink: '/showcase/button-raised',
      text: 'Button Raised'
    },
    {
      routerLink: '/showcase/button-stroked',
      text: 'Button Stroked'
    },
    {
      routerLink: '/showcase/button-toggle',
      text: 'Button Toggle'
    },
    {
      routerLink: '/showcase/card',
      text: 'Card'
    },
    {
      routerLink: '/showcase/checkbox-input',
      text: 'Checkbox Input'
    },
    {
      routerLink: '/showcase/chip-option',
      text: 'Chip Option'
    },
    {
      routerLink: '/showcase/date-input',
      text: 'Date Input'
    },
    {
      routerLink: '/showcase/dialog-modal',
      text: 'Dialog Modal'
    },
    {
      routerLink: '/showcase/drawer',
      text: 'Drawer'
    },
    {
      routerLink: '/showcase/expansion-panel',
      text: 'Expansion Panel'
    },
    {
      routerLink: '/showcase/icon',
      text: 'Icon'
    },
    {
      routerLink: '/showcase/menu',
      text: 'Menu'
    },
    {
      routerLink: '/showcase/navbar-itens',
      text: 'NavBar Itens'
    },
    {
      routerLink: '/showcase/paginator',
      text: 'Paginator'
    },
    {
      routerLink: '/showcase/progress-bar',
      text: 'Progress Bar'
    },
    {
      routerLink: '/showcase/radio-input',
      text: 'Radio Input'
    },
    {
      routerLink: '/showcase/select-option',
      text: 'Select Option'
    },
    {
      routerLink: '/showcase/slide-toggle',
      text: 'Slide Toggle'
    },
    {
      routerLink: '/showcase/slider',
      text: 'Slider'
    },
    {
      routerLink: '/showcase/snack-bar-position',
      text: 'Snack Bar Position'
    },
    {
      routerLink: '/showcase/snackbar-alert-static',
      text: 'SnackBar Alert Static'
    },
    {
      routerLink: '/showcase/spinner',
      text: 'Spinner'
    },
    {
      routerLink: '/showcase/tabs',
      text: 'Tabs'
    },
    {
      routerLink: '/showcase/text',
      text: 'Text'
    },
    {
      routerLink: '/showcase/text-input',
      text: 'Text Input'
    },
    {
      routerLink: '/showcase/textareas-input',
      text: 'Textareas Input'
    }
  ];
}
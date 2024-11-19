import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { ButtonIconComponent } from '../../components/button-icon/button-icon.component';
import { ItemButtonMenuComponent } from '../../components/list-item/item-button-menu/item-button-menu.component';
import { ItemCoolComponent } from '../../components/list-item/item-cool/item-cool.component';
import { NavListColumnComponent } from '../../components/list-item/nav-list-column/nav-list-column.component';
import { NavListRowComponent } from '../../components/list-item/nav-list-row/nav-list-row.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NavListRowComponent,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule,
    ItemCoolComponent,
    MatIconModule,
    MatButtonModule,
    ButtonIconComponent,
    NavListColumnComponent,
    MatListModule,
    ItemButtonMenuComponent
  ]
})
export class ShowcaseComponent implements OnInit {

  @ViewChild('drawer', { static: true }) public sidenav!: MatSidenav;

  public currentRoute: string = '';

  public themeType = 'light';

  public menus:any[] = [];

  public typeMenu = 'Home';

  public toggleDisable = false;


  public menusComponent = [
    {
      routerLink: '/showcase/components/bottom-sheet',
      text: 'Bottom Sheet'
    },
    {
      routerLink: '/showcase/components/drawer',
      text: 'Drawer'
    },
    {
      routerLink: '/showcase/components/select-option',
      text: 'Select Option'
    },
    {
      routerLink: '/showcase/components/date-input',
      text: 'Date Input'
    },
    {
      routerLink: '/showcase/components/text-input',
      text: 'Text Input'
    },
    {
      routerLink: '/showcase/components/textareas-input',
      text: 'Textareas Input'
    },
    {
      routerLink: '/showcase/components/card',
      text: 'Card'
    },
    {
      routerLink: '/showcase/components/radio-input',
      text: 'Radio Input'
    },
    {
      routerLink: '/showcase/components/menu',
      text: 'Menu'
    },
    {
      routerLink: '/showcase/components/checkbox-input',
      text: 'Checkbox Input'
    },
    {
      routerLink: '/showcase/components/button-toggle',
      text: 'Button Toggle'
    },
    {
      routerLink: '/showcase/components/chip-option',
      text: 'Chip Option'
    },
    {
      routerLink: '/showcase/components/slide-toggle',
      text: 'Slide Toggle'
    },
    {
      routerLink: '/showcase/components/tabs',
      text: 'Tabs'
    },
    {
      routerLink: '/showcase/components/dialog-modal',
      text: 'Dialog Modal'
    },
    {
      routerLink: '/showcase/components/snack-bar-position',
      text: 'Snack Bar Position'
    },
    {
      routerLink: '/showcase/components/button-stroked',
      text: 'Button Stroked'
    },
    {
      routerLink: '/showcase/components/button-raised',
      text: 'Button Raised'
    },
    {
      routerLink: '/showcase/components/button-flat',
      text: 'Button Flat'
    },
    {
      routerLink: '/showcase/components/button-basic',
      text: 'Button Basic'
    },
    {
      routerLink: '/showcase/components/button-cancat',
      text: 'Button Cancat'
    },
    {
      routerLink: '/showcase/components/button-fab',
      text: 'Button FAB'
    },
    {
      routerLink: '/showcase/components/button-icon',
      text: 'Button Icon'
    },
    {
      routerLink: '/showcase/components/button-icon-spinner',
      text: 'Button Icon Spinner'
    },
    {
      routerLink: '/showcase/components/slider',
      text: 'Slider'
    },
    {
      routerLink: '/showcase/components/icon',
      text: 'Icon'
    },
    {
      routerLink: '/showcase/components/spinner',
      text: 'Spinner'
    },
    {
      routerLink: '/showcase/components/progress-bar',
      text: 'Progress Bar'
    },
    {
      routerLink: '/showcase/components/text',
      text: 'Text'
    },
    {
      routerLink: '/showcase/components/expansion-panel',
      text: 'Expansion Panel'
    },
    {
      routerLink: '/showcase/components/paginator',
      text: 'Paginator'
    },
    {
      routerLink: '/showcase/components/navbar-itens',
      text: 'NavBar Itens'
    },
    {
      routerLink: '/showcase/components/snackbar-alert-static',
      text: 'SnackBar Alert Static'
    },
  ];

  public menusDocument = [
    {
      routerLink: '/showcase/components/showcase/components/bottom-sheet',
      text: 'Primeiro passo'
    },
    {
      routerLink: '/showcase/components/showcase/components/drawer',
      text: 'Sobre Projeto'
    },
  ];
  
  public menus_top = [
    {
      routerLink: 'components',
      text: 'Componentes'
    },
    {
      routerLink: 'documents',
      text: 'Documentação'
    }
  ];

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() { 
    this.startMenu()
    this.listenRouterEvents()
  }

  theme() {
    this.renderer.removeClass(document.body, this.themeType);
    this.themeType = this.themeType === 'dark' ? 'light' : 'dark';
    this.renderer.addClass(document.body, this.themeType);
  }

  listenRouterEvents() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
        console.log('Rota atual:', this.currentRoute);
        this.setMenu(this.currentRoute)
      });
  }

  startMenu() {
    this.currentRoute = this.router.url;
    this.setMenu(this.currentRoute)
  }

  setMenu(url:string) {
    if(url == '/showcase/components'){
      this.menus = this.menusComponent
      this.typeMenu = 'Componentes'
      this.sidenav.open();
      this.toggleDisable = false;
    }

    if(url == '/showcase/documents'){
      this.menus = []//this.menus_document
      this.typeMenu = 'Documentação'
      this.sidenav.close();
      this.toggleDisable = true;
    }
  }
}
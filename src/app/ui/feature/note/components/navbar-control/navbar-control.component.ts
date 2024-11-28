import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DrawerService } from 'src/app/ui/components/drawer/drawer.service';
import { MenuComponent as Menu } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DrawerComponent } from 'src/app/ui/components/drawer/drawer.component';
import { MenuComponent } from 'src/app/ui/components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';


@Component({
  selector: 'NavbarControl',
  templateUrl: './navbar-control.component.html',
  styleUrls: ['./navbar-control.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DrawerComponent,
    MenuComponent,
    MatMenuModule
  ]
})
export class NavbarControlComponent implements OnInit {

  protected searchLink = ROUTER_LINKS.NOTE_SEARCH;
  
  public menuOptions: any = [
    { label: 'Editar', icon: 'edit_note', cod: 'item1' },
    { label: 'Ver', icon: 'visibility',cod: 'item2' },
    { label: 'Fixar favoritos na parte superior', icon: 'check_circle', cod: 'item2' }
  ];
  constructor(private drawerService: DrawerService) {

  }

  ngOnInit() {

  }

  openMenu() {
    this.drawerService.open(Menu,{});
  }

  onSelect($event: string) {
    console.log($event)
  }
}

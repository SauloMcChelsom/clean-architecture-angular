import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from 'src/app/ui/components/menu/menu.component';

@Component({
  selector: 'NavbarSort',
  templateUrl: './navbar-sort.component.html',
  styleUrls: ['./navbar-sort.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MenuComponent,
    MatMenuModule
  ]
})
export class NavbarSortComponent implements OnInit {
  public menuOptions: any[] = [
    { label: 'Titulo', cod: 'item1' },
    { label: 'Data de criação', cod: 'item2' },
    { label: 'Data da modificação',  cod: 'item3' }
  ];

  type_sort = 'Data da modificação';
  mode_sort = 'arrow_downward';

  constructor() { }

  ngOnInit() {
  }

  onSelect($event: string) {
    const menu = this.menuOptions.find((v)=>v.cod == $event)
    this.type_sort = menu.label
  }

  sort(){
    if(this.mode_sort == 'arrow_downward'){
      this.mode_sort = 'arrow_upward';
      return;
    }
    
    this.mode_sort = 'arrow_downward';
  }
}

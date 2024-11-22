import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { NavBarItensComponent } from 'src/app/ui/components/nav-bar/nav-bar-itens.component';

@Component({
  selector: 'app-nav-bar-itens-showcase',
  templateUrl: './nav-bar-itens-showcase.component.html',
  styleUrls: ['./nav-bar-itens-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NavBarItensComponent,
    ButtonCancatComponent,
    NavBarItensComponent
  ]
})
export class NavBarItensShowcaseComponent implements OnInit {
  codes = [
    `
    import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
    import { NavBarItensComponent } from 'src/app/ui/components/nav-bar/nav-bar-itens.component';
    `,
    `
    <NavBarItens>
      <ButtonCancat icon="west" left></ButtonCancat>
      <ButtonCancat icon="delete" center></ButtonCancat>
      <ButtonCancat icon="add" right [spinner]="spinner" (onClick)="add()"></ButtonCancat> 
    </NavBarItens>
    `,
    `
    protected spinner: boolean = false;
    add(){
      this.spinner = true;
    }
    `,
    `
    
    `,
  ];
  protected spinner: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.spinner = true;
  }
}

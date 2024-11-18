import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { NavBarComponent } from 'src/app/ui/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-nav-bar-itens-showcase',
  templateUrl: './nav-bar-itens-showcase.component.html',
  styleUrls: ['./nav-bar-itens-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    NavBarComponent,
    ButtonCancatComponent
  ]
})
export class NavBarItensShowcaseComponent implements OnInit {
  protected spinner: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.spinner = true;
  }
}

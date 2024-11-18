import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { NavBarItensComponent } from 'src/app/ui/components/nav-bar/nav-bar-itens.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { ListLanguageComponent } from '../components/list-language.component';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    TranslateModule,
    ListLanguageComponent,
    NavBarItensComponent,
    ButtonCancatComponent
  ]
})
export class ChangeLanguageComponent implements OnInit {
  ROOT = ROUTER_LINKS.ROOT;
  constructor() { }

  ngOnInit() {
  }

}

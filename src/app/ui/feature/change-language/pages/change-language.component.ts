import { Component, OnInit } from '@angular/core';
import { ListLanguageComponent } from '../components/list-language.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/ui/components/nav-bar/nav-bar.component';
import { Flex, Tag, TextComponent, Title } from 'src/app/ui/components/text/text.component';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    TranslateModule,
    ListLanguageComponent,
    NavBarComponent,
    TextComponent,
    ButtonCancatComponent
  ]
})
export class ChangeLanguageComponent implements OnInit {
  ROOT = ROUTER_LINKS.ROOT;
  Tag=Tag;
  Flex=Flex;
  Title=Title;
  constructor() { }

  ngOnInit() {
  }

}

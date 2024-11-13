import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonBasicComponent } from 'src/app/ui/components/button-basic/button-basic.component';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';
import { Flex, Tag, TextComponent, Title } from 'src/app/ui/components/text/text.component';

@Component({
  selector: 'app-button-basic-showcase',
  templateUrl: './button-basic-showcase.component.html',
  styleUrls: ['./button-basic-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
    IconComponent,
    ButtonBasicComponent
  ]
})
export class ButtonBasicShowcaseComponent implements OnInit {
  Tag=Tag;
  Flex=Flex;
  Title=Title;
  constructor() { }

  ngOnInit() {
  }

}

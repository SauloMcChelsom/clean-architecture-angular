import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonFlatComponent } from 'src/app/ui/components/button-flat/button-flat.component';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';
import { Flex, Tag, TextComponent, Title } from 'src/app/ui/components/text/text.component';

@Component({
  selector: 'app-button-flat-showcase',
  templateUrl: './button-flat-showcase.component.html',
  styleUrls: ['./button-flat-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
    IconComponent,
    ButtonFlatComponent
  ]
})
export class ButtonFlatShowcaseComponent implements OnInit {
  Tag=Tag;
  Flex=Flex;
  Title=Title;
  constructor() { }

  ngOnInit() {
  }

}

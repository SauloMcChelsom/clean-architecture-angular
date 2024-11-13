import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonStrokedComponent } from 'src/app/ui/components/button-stroked/button-stroked.component';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';
import { Flex, Tag, TextComponent, Title } from 'src/app/ui/components/text/text.component';

@Component({
  selector: 'app-button-stroked-showcase',
  templateUrl: './button-stroked-showcase.component.html',
  styleUrls: ['./button-stroked-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
    IconComponent,
    ButtonStrokedComponent
  ]
})
export class ButtonStrokedShowcaseComponent implements OnInit {
  Tag=Tag;
  Flex=Flex;
  Title=Title;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Flex, Tag, TextComponent, Title } from 'src/app/ui/components/text/text.component';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[TextComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Tag = Tag;
  Flex = Flex;
  Title = Title
}

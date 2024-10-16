import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Flex, Tag, TextComponent, Title } from 'src/app/ui/components/text/text.component';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[TranslateModule, TextComponent]
})
export class HeaderComponent {
  folderCount: number = 5;
  noteCount: number = 3;
  Tag = Tag;
  Flex = Flex;
  Title = Title;
}

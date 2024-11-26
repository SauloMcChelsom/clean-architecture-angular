import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[TranslateModule]
})
export class HeaderComponent {
  @Input() folderCount: number = 0;
  @Input() noteCount: number = 0;
}

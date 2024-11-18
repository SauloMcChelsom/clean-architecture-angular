import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[TranslateModule]
})
export class HeaderComponent {
  folderCount: number = 5;
  noteCount: number = 3;
}

import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

/**
 * @title Basic icons
 */
@Component({
  selector: 'Icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class IconComponent {
  size!:number;
  color!:string;
}
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { IconSizes } from './models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class IconComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() fontIcon: string = '';
  @Input() color!: string;
  @Input() ariaLabel:string =''
  @Input() size: IconSizes = IconSizes.MEDIUM;
  IconSizes=IconSizes;
  
  onClickEvent() {
    this.onClick.emit();
  }
}
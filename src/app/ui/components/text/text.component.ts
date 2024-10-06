import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum Tag {
  div  = 'div',
  p    = 'p',
  span = 'span',
  h1   = 'h1',
  h2   = 'h2',
  h3   = 'h3',
  h4   = 'h4',
  h5   = 'h5',
  h6   = 'h6'
}

export enum Title {
  small = 'title-small',
  default = 'title-default',
  medium = 'title-medium',
  large = 'title-large',
  big = 'title-large-big',
  huge = 'title-large-huge'
}

export enum Flex {
  centerAndcenter  = 'flex align-items-center justify-content-center',
  justifyContentStart  = 'flex justify-content-start',
  none = '',
}

@Component({
  selector: 'Text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class TextComponent {
  @Input() text: string = '';
  @Input() tag: Tag = Tag.div;
  @Input() class: string = '';
  @Input() id: string = '';
  @Input() flex: Flex = Flex.none;
  @Input() title: Title = Title.small;

  Tag = Tag;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'TitleSimple',
  templateUrl: './title-simple.component.html',
  styleUrls: ['./title-simple.component.scss'],
  standalone: true
})
export class TitleSimpleComponent {
  @Input() title: string = '';
  @Input() class!: string;
  @Input() id!: string;
}

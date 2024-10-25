
import {Component, Input} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'SlideToggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  standalone: true,
  imports: [MatSlideToggleModule],
})
export class SlideToggleComponent {
  @Input() ariaLabel!:string;
}
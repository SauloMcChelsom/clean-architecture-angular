
import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Slider with custom thumb label formatting.
 */
@Component({
  selector: 'Slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [MatSliderModule],
})
export class SliderComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SliderComponent } from 'src/app/ui/components/slider/slider.component';

@Component({
  selector: 'app-slider-showcase',
  templateUrl: './slider-showcase.component.html',
  styleUrls: ['./slider-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent,
    MatButtonModule
  ]
})
export class SliderShowcaseComponent {
  codes = [
    `
    import { SliderComponent } from 'src/app/ui/components/slider/slider.component';
    `,
    `
    <Slider 
      [formControl]="sliderControl" 
      [min]="0" 
      [max]="100" 
      [step]="10"
      [isRequired]="true"
      [initialValue]="30"
    ></Slider>
    `,
    `
    sliderControl = new FormControl();
    `
  ];
  sliderControl = new FormControl();

  @ViewChild(SliderComponent) component!: SliderComponent;

  reset() {
    this.component.resetToInitialState()
  }

  disable() {
    this.component.disable()
  }
  enable() {
    this.component.enable()
  }
}

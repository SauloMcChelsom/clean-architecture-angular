import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SliderComponent } from 'src/app/ui/components/slider/slider.component';

@Component({
  selector: 'app-slider-showcase',
  templateUrl: './slider-showcase.component.html',
  styleUrls: ['./slider-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent
  ]
})
export class SliderShowcaseComponent {
  sliderControl = new FormControl();

  @ViewChild(SliderComponent) component!: SliderComponent;
  
  reset(){
    this.component.resetToInitialState()
  }

  disable(){
    this.component.disable()
  }
  enable(){
    this.component.enable()
  }
}

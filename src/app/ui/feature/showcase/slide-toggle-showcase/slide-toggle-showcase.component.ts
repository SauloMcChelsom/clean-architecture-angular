import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SlideToggleComponent } from 'src/app/ui/components/slide-toggle/slide-toggle.component';

@Component({
  selector: 'app-slide-toggle-showcase',
  templateUrl: './slide-toggle-showcase.component.html',
  styleUrls: ['./slide-toggle-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SlideToggleComponent
  ]
})
export class SlideToggleShowcaseComponent {

  config = {
    formControl:  new FormControl(true, Validators.requiredTrue)
  }

  onToggleChange(value: boolean) {
    console.log('Toggle State:', value);
  }

  @ViewChild(SlideToggleComponent) component!: SlideToggleComponent;
  
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

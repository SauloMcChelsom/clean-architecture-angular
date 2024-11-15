import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'Slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule],
})
export class SliderComponent {
  @Input() formControl!: FormControl;
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() min: number = 0;
  @Input() max: number = 100000;
  @Input() step: number = 1000;
  @Input() initialValue: number = 0;

  ngOnChanges() {
    if(this.isDisabled){
      this.disable();
    }

    if(this.isRequired){
      this.required();
    }

    if(this.initialValue){
      this.setInitialValue(this.initialValue);
    }
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + ``;
    }
    return `${value}`;
  }

  setInitialValue(value: number){
    this.formControl.setValue(value)
  }

  disable(){
    this.formControl.disable();
  }

  enable(){
    this.formControl.enable();
  }

  required(){
    this.formControl.addValidators(this.greaterThanZeroValidators())
  }

  resetToInitialState() {
    this.formControl.setValue(this.initialValue);
  
    if (this.isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  
    if (this.isRequired) {
      this.formControl.setValidators(this.greaterThanZeroValidators());
    } else {
      this.formControl.clearValidators();
    }
  
    this.formControl.updateValueAndValidity();
  }

  greaterThanZeroValidators(): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value > 0) {
        return null;
      } else {
        return { greaterThanZero: true };
      }
    };
  }
}
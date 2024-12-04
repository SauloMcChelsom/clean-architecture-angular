import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputTypes } from './enuns/dynamic-date-input.types';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'Inputs',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InputComponent {
  @Input() formControl!: FormControl<any>;
  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() erroFill!: string;
  @Input() erroRequired!:string;
  @Input() ariaLabel!:string;
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() minLength!: number;
  @Input() maxLength!: number;
  @Input() type: InputTypes = 'text';
  public isReady: boolean = false;
  hide = false;
  
  ngOnChanges() {
    setTimeout(() => {
      this.isReady = true;
    })
  }

  private initialControlValue: any;
  private initialDisabledState!: boolean;
  private initialValidator: any;

  ngOnInit(): void {
    this.initialControlValue = this.formControl.value;
    this.initialDisabledState = this.isDisabled;
    this.initialValidator = this.isRequired ? Validators.required : null;

    this.applyDisabledState(this.isDisabled);
    this.applyMinLength(this.minLength);
    this.applyMaxLength(this.maxLength);
    this.applyRequiredValidator(this.isRequired);

    if(this.type == 'password'){
      this.hide = true;
    }
  }

  private applyMinLength(min:number) {
    if (min == null || min <= 0) {
      return;
    }

    const existingValidators = this.formControl.validator ? [this.formControl.validator] : [];
    this.formControl.setValidators([...existingValidators, Validators.minLength(min)]);
    this.formControl.updateValueAndValidity();
  }

  private applyMaxLength(max: number) {
    if (max == null || max <= 0) {
      return;
    }
  
    const existingValidators = this.formControl.validator ? [this.formControl.validator] : [];
    this.formControl.setValidators([...existingValidators, Validators.maxLength(max)]);
    this.formControl.updateValueAndValidity();
  }

  public resetToInitialState(): void {
    this.formControl.patchValue(this.initialControlValue);
    this.applyRequiredValidator(this.initialValidator !== null);
    this.applyDisabledState(this.initialDisabledState);
    this.formControl.markAsUntouched();
    this.formControl.updateValueAndValidity();
  }

  public enable(): void {
    this.formControl.enable();
  }

  public disable(): void {
    this.formControl.disable();
  }

  private applyDisabledState(shouldDisable: boolean): void {
    shouldDisable ? this.disable() : this.enable();
  }

  private applyRequiredValidator(isRequired: boolean): void {
    const existingValidators = this.formControl.validator ? [this.formControl.validator] : [];
    if (isRequired) {
      this.formControl.setValidators([...existingValidators, Validators.required]);
    } else {
      this.formControl.setValidators(existingValidators.filter(v => v !== Validators.required));
    }
    this.formControl.updateValueAndValidity();
  }
}

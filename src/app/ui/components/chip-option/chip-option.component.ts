import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipSelectionChange, MatChipsModule } from '@angular/material/chips';
import { ChipOptionModel } from './models';

@Component({
  selector: 'ChipOption',
  templateUrl: './chip-option.component.html',
  styleUrls: ['./chip-option.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
})
export class ChipOptionComponent implements OnInit {
  @Input() chips: ChipOptionModel[] = [];
  @Input() formControl!: FormControl;
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  private initialControlValue: any;
  private initialDisabledState!: boolean;
  private initialValidator: any;

  ngOnInit() {
    this.initialControlValue = this.formControl.value;
    this.initialDisabledState = this.isDisabled;
    this.initialValidator = this.isRequired ? Validators.required : null;

    if (!Array.isArray(this.formControl.value)) {
      this.formControl.setValue([]);
    }

    this.applyRequiredValidator(this.isRequired);
    this.applyDisabledState(this.isDisabled);
  }

  toggleSelection(cod: string, event: MatChipSelectionChange): void {
    this.formControl.setValue([]);

    const chipNotSelected = !event.selected;
    if(chipNotSelected){
      return;
    }
    
    const currentValue = this.formControl.value as string[];
    const updatedValue = currentValue.includes(cod)
      ? currentValue.filter((value) => value !== cod)
      : [...currentValue, cod];

    this.formControl.setValue(updatedValue);
    this.formControl.markAsTouched();
  }

  public enable(): void {
    this.isDisabled = false;
    this.formControl.enable();
  }

  public disable(): void {
    this.isDisabled = true;
    this.formControl.disable();
  }

  private applyDisabledState(shouldDisable: boolean): void {
    shouldDisable ? this.disable() : this.enable();
  }

  private applyRequiredValidator(isRequired: boolean): void {
    if (isRequired) {
      this.formControl.setValidators(Validators.required);
    } else {
      this.formControl.clearValidators();
    }
    this.formControl.updateValueAndValidity();
  }

  resetToInitialState(): void {
    this.formControl.patchValue(this.initialControlValue);
    this.applyRequiredValidator(this.initialValidator !== null);
    this.applyDisabledState(this.initialDisabledState);
    this.formControl.markAsUntouched();
    this.formControl.updateValueAndValidity();
  }
}
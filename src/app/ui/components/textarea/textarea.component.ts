import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextareaInputConfig } from './enuns/dynamic-date-input.types';

@Component({
  selector: 'Textareas',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
  ]
})
export class TextareaComponent {
  @Input() formControl!: FormControl<any>;
  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() erroFill!: string;
  @Input() erroRequired!:string;
  @Input() ariaLabel!:string;
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() isHeightDynamic: boolean = true;
  @Input() minLength!: number;
  @Input() maxLength!: number;
  public isReady: boolean = false;
  
  heightDynamic() {
    if(!this.isHeightDynamic){
      return;
    }

    const group_components_in_screen = 260;
    const screen_height = window.innerHeight;
    let scrollHeight = screen_height - group_components_in_screen;
    const textarea = document.getElementById('textarea-content');
    textarea!.style.height = 'auto';
    textarea!.style.height = `${scrollHeight}px`; 
  }

  private initialControlValue: any;
  private initialDisabledState!: boolean;
  private initialValidator: any;

  ngOnInit(): void {
    this.initialControlValue = this.formControl.value;
    this.initialDisabledState = this.isDisabled;
    this.initialValidator = this.isRequired ? Validators.required : null;

    this.heightDynamic();
    this.applyDisabledState(this.isDisabled);
    this.applyMinLength(this.minLength);
    this.applyMaxLength(this.maxLength);
    this.applyRequiredValidator(this.isRequired);

    setTimeout(() => {
      this.isReady = true;
    })
  }

  private applyMinLength(min:number) {
    if (min == null || min <= 0) {
      return;
    }

    this.formControl.setValidators(Validators.minLength(min))
  }

  private applyMaxLength(max:number) {
    if (max == null || max <= 0) {
      return;
    }

    this.formControl.setValidators(Validators.maxLength(max));
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
    if (isRequired) {
      this.formControl.setValidators(Validators.required);
    } else {
      this.formControl.clearValidators();
    }
    this.formControl.updateValueAndValidity();
  }
}

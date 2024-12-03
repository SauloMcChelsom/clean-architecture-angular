import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  @ViewChild('textareaContent', { read: ViewContainerRef, static: false }) textareaContent!: ViewContainerRef;

  @Input() formControl!: FormControl<any>;
  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() erroFill!: string;
  @Input() erroRequired!:string;
  @Input() ariaLabel!:string;
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() height: number = 0;
  @Input() minLength!: number;
  @Input() maxLength!: number;
  public isReady: boolean = false;
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

    setTimeout(() => {
      this.isReady = true;
    })
  }

  ngOnChanges() {
    this.setHeight();
  }

  setHeight(){
    if(!this.height){
      return
    }

    setTimeout(()=>{
      this.textareaContent.element.nativeElement.style.height = `${this.height}px`;
    })
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

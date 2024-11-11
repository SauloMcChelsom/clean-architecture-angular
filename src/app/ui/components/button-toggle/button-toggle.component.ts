import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToggleOptionModel } from './models';

@Component({
  selector: 'ButtonToggle',
  template: `
  <div class="container">
      <h3>{{ title }}</h3>
      <mat-button-toggle-group
        [formControl]="formControl"
        [name]="groupName"
        [multiple]="multiple"
        (change)="onSelectionChange($event)">
        
        <mat-button-toggle 
          *ngFor="let option of options" 
          [value]="option.value" 
          [disabled]="option.disabled">
          {{ option.label }}
        </mat-button-toggle>
        
      </mat-button-toggle-group>
  </div>
  `,
  styleUrls: ['./button-toggle.component.scss'],
  standalone: true,
  imports: [MatButtonToggleModule, ReactiveFormsModule, CommonModule],
})
export class ButtonToggleGroupComponent implements OnInit {
  @Input() title: string = '';
  @Input() groupName: string = 'toggleGroup';
  @Input() multiple: boolean = false;
  @Input() options: ToggleOptionModel[] = [];
  @Input() formControl!: FormControl;

  @Output() selectionChange = new EventEmitter<string | string[]>();

  private initialValue: any;
  private initialDisabledState: boolean = false;

  ngOnInit() {
    this.initialValue = this.formControl.value;
    this.initialDisabledState = this.formControl.disabled;
    
    if (!this.formControl.value) {
      this.formControl.setValue(this.multiple ? [] : '');
    }
  }

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event.value);
  }

  public enable(): void {
    this.formControl.enable();
  }

  public disable(): void {
    this.formControl.disable();
  }

  public resetToInitialState(): void {
    this.formControl.setValue(this.initialValue);
    this.formControl.markAsPristine();
    this.formControl.markAsUntouched();

    if (this.initialDisabledState) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }
}

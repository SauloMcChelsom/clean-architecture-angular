import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'SlideToggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  standalone: true,
  imports: [MatSlideToggleModule, ReactiveFormsModule],
})
export class SlideToggleComponent implements OnInit {
  @Input() formControl!: FormControl;
  @Input() label: string = '';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  @Output() toggleChange = new EventEmitter<boolean>();

  private initialState!: boolean;
  private initialDisabledState!: boolean;

  ngOnInit(): void {
    this.initialState = this.formControl.value;
    this.initialDisabledState = this.formControl.disabled;
  }

  onToggle(isChecked: boolean): void {
    this.toggleChange.emit(isChecked);
  }

  public enable(): void {
    this.formControl.enable();
  }

  public disable(): void {
    this.formControl.disable();
  }

  public resetToInitialState(): void {
    this.formControl.setValue(this.initialState);
    this.formControl.markAsPristine();
    this.formControl.markAsUntouched();
    if (this.initialDisabledState) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
    this.formControl.updateValueAndValidity();
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextInputConfig } from './enuns/dynamic-date-input.types';


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
  ]
})
export class InputComponent {
  @Input() config!: TextInputConfig;

  public isReady: boolean = false;
  ngOnChanges() {
    setTimeout(() => {
      this.isReady = true;
    })
  }
}

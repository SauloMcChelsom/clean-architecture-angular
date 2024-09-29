import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { TextInputConfig } from './enuns/dynamic-date-input.types';


@Component({
  selector: 'Inputs',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports:[
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

  public isReady:boolean = false;
  ngOnChanges() {
    setTimeout(()=>{
      this.isReady = true;
    })
  }
}

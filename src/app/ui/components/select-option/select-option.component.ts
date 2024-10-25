import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextComponent } from '../text/text.component';

export interface SelectionModel {
  description: string;
  cod: string;
}

export interface SelectOptionModel {
  formControl: FormControl<any>;
  selectEmpy: string;
  selections: SelectionModel[]
}

@Component({
  selector: 'SelectOption',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TextComponent
  ]
})
export class SelectOptionComponent {
  @Input() config!: SelectOptionModel;
}

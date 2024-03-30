import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'radio-ng-model-example.html',
  styleUrls: ['radio-ng-model-example.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    NgFor,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class RadioNgModelExample {
  selected = '';
  options = [...Array(4).keys()].map((x) => -x);

  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}

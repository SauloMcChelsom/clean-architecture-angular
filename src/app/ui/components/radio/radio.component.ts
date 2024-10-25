import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'Radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
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
export class RadioComponent {
  selected = '';
  options = [...Array(4).keys()].map((x) => -x);

  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
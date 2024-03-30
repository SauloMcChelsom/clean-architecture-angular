import { Component, ViewEncapsulation } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.scss'],
  templateUrl: 'input-overview-example.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class InputOverviewExample {
  selected = '';
  options = [...Array(6).keys()].map((x) => -x);
}

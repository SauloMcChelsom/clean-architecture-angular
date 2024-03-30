import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'icon-button-overview-example',
  templateUrl: 'icon-button-overview-example.html',
  styleUrls: ['icon-button-overview-example.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
  ],
})
export class IconButtonOverviewExample {
  selected = '';
  options = [...Array(6).keys()].map((x) => -x);
}

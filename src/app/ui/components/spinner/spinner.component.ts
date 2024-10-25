
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'Spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [
    MatSliderModule,
    MatProgressSpinnerModule
  ],
})
export class SpinnerComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50
}
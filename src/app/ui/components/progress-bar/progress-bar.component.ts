
import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/**
 * @title Determinate progress-bar
 */
@Component({
  selector: 'ProgressBar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
  imports: [MatProgressBarModule],
})
export class ProgressBarComponent {}
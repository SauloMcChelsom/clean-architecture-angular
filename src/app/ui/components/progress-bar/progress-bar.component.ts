import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';


export enum ProgressBarModeEnum {
  INDETERMINATE = 'indeterminate',
  DETERMINATE = 'determinate',
  QUERY = 'query',
  BUFFER = 'buffer'
}

@Component({
  selector: 'ProgressBar',
  template: `
  <mat-progress-bar [mode]="mode"  [value]="percentage" [bufferValue]='bufferValue'></mat-progress-bar>
  `,
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
})
export class ProgressBarComponent {
  @Input() mode:ProgressBarModeEnum = ProgressBarModeEnum.DETERMINATE;
  @Input() percentage:number = 0;
  @Input() bufferValue:number = 0;
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';
import { ProgressBarComponent, ProgressBarModeEnum } from 'src/app/ui/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-progress-bar-showcase',
  templateUrl: './progress-bar-showcase.component.html',
  styleUrls: ['./progress-bar-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarComponent,
    IconComponent,
    MatButtonModule
  ]
})
export class ProgressBarShowcaseComponent {
  codes = [
    `
    import { ProgressBarComponent, ProgressBarModeEnum } from 'src/app/ui/components/progress-bar/progress-bar.component';
    `,
    `
    <ProgressBar
      [mode]="mode" 
      [percentage]='progress.current' 
      [bufferValue]='progress.buffer'
    ></ProgressBar>
    `,
    `
    mode: ProgressBarModeEnum = ProgressBarModeEnum.BUFFER;
    progress = {
      current: 10,
      buffer: 25,
      total: 100
    };
    `,
    `
    
    `,
  ];
  mode: ProgressBarModeEnum = ProgressBarModeEnum.BUFFER;
  progress = {
    current: 10,
    buffer: 25,
    total: 100
  };

  private bufferIncrementValues = [5, 10, 15, 20, 30, 40, 50, 60];

  get randomBufferIncrement(): number {
    return this.bufferIncrementValues[Math.floor(Math.random() * this.bufferIncrementValues.length)];
  }

  incrementProgress(): void {
    if (this.progress.current >= this.progress.total) {
      return;
    }

    this.progress.current = Math.min(this.progress.current + 10, this.progress.total);
    this.progress.buffer = Math.min(this.progress.buffer + this.randomBufferIncrement, 100);
  }

  decrementProgress(): void {
    if (this.progress.current <= 0) {
      return;
    }

    this.progress.current = Math.max(this.progress.current - 10, 0);
    this.progress.buffer = Math.max(this.progress.buffer - this.randomBufferIncrement, 0);
  }

  indeterminate(){
    this.mode = ProgressBarModeEnum.INDETERMINATE;
  }

  determinate(){
    this.mode = ProgressBarModeEnum.DETERMINATE;
  }

  query(){
    this.mode = ProgressBarModeEnum.QUERY;
  }

  buffer(){
    this.mode = ProgressBarModeEnum.BUFFER;
  }
}
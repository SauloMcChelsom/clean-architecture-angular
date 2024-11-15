import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';
import { StrokeColorDirective } from './directive/stroke-color.directive';
import { StrokeLineCircleDirective } from './directive/stroke-line-circle.directive';

@Component({
  selector: 'SpinnerSteps',
  templateUrl: './spinner-steps.component.html',
  styleUrls: ['./spinner-steps.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TranslateModule,
    ReactiveFormsModule,
    StrokeLineCircleDirective,
    StrokeColorDirective
  ]
})
export class SpinnerStepsComponent implements OnInit {

  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() currentStep: number = 2;
  @Input() totalSteps: number = 5;
  protected primaryColor!: string;

  ngOnInit() {
    this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--app-primary');
  }

  get progressValue(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

}

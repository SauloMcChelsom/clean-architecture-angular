import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'SpinnerProgress',
  templateUrl: './spinner-progress.component.html',
  styleUrls: ['./spinner-progress.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TranslateModule
  ]
})
export class SpinnerProgressComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() currentStep: number = 2; // Número atual do passo
  @Input() totalSteps: number = 5; // Total de passos

  // Percentual de progresso
  get progressValue(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }
}


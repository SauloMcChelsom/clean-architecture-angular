import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ButtonIconSpinner',
  templateUrl: './button-icon-spinner.component.html',
  styleUrls: ['./button-icon-spinner.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ButtonIconSpinnerComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() diameter: string = '24';

  onClickEvent() {
    this.onClick.emit();
  }

}

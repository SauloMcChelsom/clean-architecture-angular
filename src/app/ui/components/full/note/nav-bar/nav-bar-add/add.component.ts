import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'NoteNavBarAdd',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class NoteNavBarAddComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() spinner: boolean = false;

  add() {
    this.onClick.emit();
  }

  goBack() {
    window.history.back();
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'NoteNavBarUpdate',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class NoteNavBarUpdateComponent {
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onBack: EventEmitter<any> = new EventEmitter();

  @Input() spinner: boolean = false;

  update() {
    this.onUpdate.emit();
  }

  goBack() {
    this.onBack.emit();
  }
}

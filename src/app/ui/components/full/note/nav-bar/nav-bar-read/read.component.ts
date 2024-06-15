import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'NoteNavBarRead',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule
  ]
})
export class NoteNavBarReadComponent {
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onView: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  
  @Input() spinner:boolean = false;

  view() {
    this.onView.emit();
  }

  delete() {
    this.onDelete.emit();
  }

  edit() {
    this.onAdd.emit();
  }
}

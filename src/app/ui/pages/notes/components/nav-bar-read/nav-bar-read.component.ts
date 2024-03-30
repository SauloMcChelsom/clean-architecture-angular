import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hot-nav-bar-read',
  templateUrl: './nav-bar-read.component.html',
  styleUrls: ['./nav-bar-read.component.css']
})
export class NavBarReadComponent {
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

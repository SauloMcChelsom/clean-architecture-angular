import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar-add',
  templateUrl: './nav-bar-add.component.html',
  styleUrls: ['./nav-bar-add.component.css']
})
export class NavBarAddComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() spinner: boolean = false;

  add() {
    this.onClick.emit();
  }

  goBack() {
    window.history.back();
  }
}

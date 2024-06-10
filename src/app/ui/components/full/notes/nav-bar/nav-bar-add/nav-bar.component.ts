import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
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

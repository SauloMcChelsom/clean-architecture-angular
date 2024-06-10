import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hot-nav-bar-update',
  templateUrl: './nav-bar-update.component.html',
  styleUrls: ['./nav-bar-update.component.css']
})
export class NavBarUpdateComponent {
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

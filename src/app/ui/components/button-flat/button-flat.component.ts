import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'ButtonFlat',
  templateUrl: './button-flat.component.html',
  styleUrls: ['./button-flat.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ButtonFlatComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() ariaLabel: string = '';
  @Input() color: string = '';
  @Input() class: string = '';
  @Input() isButtonDisabled: boolean = false;
  
  onClickEvent() {
    this.onClick.emit();
  }
}

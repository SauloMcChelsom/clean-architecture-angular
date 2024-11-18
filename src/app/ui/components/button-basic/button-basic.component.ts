import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ButtonBasic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ButtonBasicComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() ariaLabel: string = '';
  @Input() color: string = '';
  @Input() class: string = '';
  @Input() isButtonDisabled: boolean = false;
  
  onClickEvent() {
    this.onClick.emit();
  }
}

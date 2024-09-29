import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ButtonIcon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ButtonIconComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() icon: string = '';
  @Input() routerLink!:string;
  @Input() ariaLabel: string = '';
  
  onClickEvent() {
    this.onClick.emit();
  }
}

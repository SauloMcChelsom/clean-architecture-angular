import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { ButtonIconSpinnerComponent } from '../button-icon-spinner/button-icon-spinner.component';

@Component({
  selector: 'ButtonCancat',
  templateUrl: './button-cancat.component.html',
  styleUrls: ['./button-cancat.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ButtonIconComponent,
    ButtonIconSpinnerComponent
  ]
})
export class ButtonCancatComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() spinner: boolean = false;
  @Input() icon: string = '';
  @Input() routerLink!:string;
  @Input() ariaLabel!:string;
  @Input() ariaLabelSpinner!:string;
  
  onClickEvent() {
    this.onClick.emit();
  }
}

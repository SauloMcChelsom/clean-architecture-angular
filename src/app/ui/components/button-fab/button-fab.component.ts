import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ButtonFab',
  templateUrl: './button-fab.component.html',
  styleUrls: ['./button-fab.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ButtonFabComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() icon: string = '';
  @Input() routerLink!:string;
  @Input() color: string = 'primary';
  @Input() ariaLabel!:string;
  
  onClickEvent() {
    this.onClick.emit();
  }

}

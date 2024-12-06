import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'MenuProfile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatIconModule, MatButtonModule
  ]
})
export class MenuProfileComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() imageUrl: string = 'assets/image/profile.jpg';
  @Input() name: string = 'Olá, Estranho';

  onClickEvent() {
    this.onClick.emit();
  }
}

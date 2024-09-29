import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class NavBarComponent {}

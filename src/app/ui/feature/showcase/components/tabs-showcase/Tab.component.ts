import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-one',
  template: `<b>Hola Mundo</b>`,
  standalone: true,
  imports: [CommonModule],
})
export class TabOneComponent {
  constructor() {
    console.log('Hola Mundo')
  }
}
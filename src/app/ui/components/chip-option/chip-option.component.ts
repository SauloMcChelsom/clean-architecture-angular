import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'ChipOption',
  templateUrl: './chip-option.component.html',
  styleUrls: ['./chip-option.component.scss'],
  standalone: true,
  imports: [
    MatChipsModule
  ],
})
export class ChipOptionComponent {

}
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'chip-option-example',
  templateUrl: './chip-option-example.component.html',
  styleUrls: ['./chip-option-example.component.scss'],
  standalone: true,
  imports: [
    MatChipsModule
  ],
})
export class ChipOptionExampleComponent {

}

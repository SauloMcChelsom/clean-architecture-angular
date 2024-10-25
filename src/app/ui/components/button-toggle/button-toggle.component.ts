import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'ButtonToggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  standalone: true,
  imports: [
    MatButtonToggleModule
  ],
})
export class ButtonToggleComponent {

}
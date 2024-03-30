import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'button-toggle-example',
  templateUrl: './button-toggle-example.component.html',
  styleUrls: ['./button-toggle-example.component.scss'],
  standalone: true,
  imports: [
    MatButtonToggleModule
  ],
})
export class ButtonToggleExampleComponent {

}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'menu-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.scss'],
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class MenuExampleComponent {

}

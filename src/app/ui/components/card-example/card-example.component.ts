import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
})
export class CardExampleComponent {

}

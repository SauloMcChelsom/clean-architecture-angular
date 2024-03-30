import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'select-option-example',
  templateUrl: './select-option-example.component.html',
  styleUrls: ['./select-option-example.component.scss'],
  standalone: true,
  imports:[
    MatSelectModule,
  ]
})
export class SelectOptionExampleComponent {

}

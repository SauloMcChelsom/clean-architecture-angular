import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectOptionShowcaseComponent } from './select-option-showcase/select-option-showcase.component';
import { DateInputShowcaseComponent } from './date-input-showcase/date-input-showcase.component';
import { TextInputShowcaseComponent } from './text-input-showcase/text-input-showcase.component';
import { TextareasInputShowcaseComponent } from './textareas-input-showcase/textareas-input-showcase.component';
import { CardShowcaseComponent } from './card-showcase/card-showcase.component';
import { RadioInputShowcaseComponent } from './radio-input-showcase/radio-input-showcase.component';
import { MenuShowcaseComponent } from './menu-showcase/menu-showcase.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SelectOptionShowcaseComponent,
    DateInputShowcaseComponent,
    TextInputShowcaseComponent,
    TextareasInputShowcaseComponent,
    CardShowcaseComponent,
    RadioInputShowcaseComponent,
    MenuShowcaseComponent
  ]
})
export class ShowcaseComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}

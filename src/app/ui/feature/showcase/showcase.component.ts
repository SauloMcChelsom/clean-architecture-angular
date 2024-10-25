import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateInputComponent } from './date-input/date-input.component';
import { DateInputModule } from './date-input/date-input.module';
import { SelectOptionShowcaseComponent } from './select-option/select-option.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DateInputModule,
    SelectOptionShowcaseComponent
  ]
})
export class ShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

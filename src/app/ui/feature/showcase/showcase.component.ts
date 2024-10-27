import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateInputModule } from './date-input/date-input.module';
import { SelectOptionShowcaseComponent } from './select-option-showcase/select-option-showcase.component';

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
  ngOnInit() { }
}

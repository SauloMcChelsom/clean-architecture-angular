import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectOptionShowcaseComponent } from './select-option-showcase/select-option-showcase.component';
import { DateInputShowcaseComponent } from './date-input-showcase/date-input-showcase.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SelectOptionShowcaseComponent,
    DateInputShowcaseComponent
  ]
})
export class ShowcaseComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}

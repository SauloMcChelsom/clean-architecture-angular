import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChipOptionComponent } from 'src/app/ui/components/chip-option/chip-option.component';

@Component({
  selector: 'app-chip-option-showcase',
  templateUrl: './chip-option-showcase.component.html',
  styleUrls: ['./chip-option-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChipOptionComponent
  ]
})
export class ChipOptionShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

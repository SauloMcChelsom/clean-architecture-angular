import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlideToggleComponent } from 'src/app/ui/components/slide-toggle/slide-toggle.component';

@Component({
  selector: 'app-slide-toggle-showcase',
  templateUrl: './slide-toggle-showcase.component.html',
  styleUrls: ['./slide-toggle-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SlideToggleComponent
  ]
})
export class SlideToggleShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

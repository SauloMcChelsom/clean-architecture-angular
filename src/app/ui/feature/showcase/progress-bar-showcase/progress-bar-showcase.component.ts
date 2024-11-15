import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProgressBarComponent } from 'src/app/ui/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-progress-bar-showcase',
  templateUrl: './progress-bar-showcase.component.html',
  styleUrls: ['./progress-bar-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    ProgressBarComponent
  ]
})
export class ProgressBarShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimaryColorDirective } from 'src/app/ui/directives/primary-color.directive';

@Component({
  selector: 'app-text-showcase',
  templateUrl: './text-showcase.component.html',
  styleUrls: ['./text-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    PrimaryColorDirective
  ]
})
export class TextShowcaseComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

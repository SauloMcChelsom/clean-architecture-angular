import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonToggleComponent } from 'src/app/ui/components/button-toggle/button-toggle.component';

@Component({
  selector: 'app-button-toggle-showcase',
  templateUrl: './button-toggle-showcase.component.html',
  styleUrls: ['./button-toggle-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    ButtonToggleComponent
  ]
})
export class ButtonToggleShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

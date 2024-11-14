import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonIconComponent } from 'src/app/ui/components/button-icon/button-icon.component';

@Component({
  selector: 'app-button-icon-showcase',
  templateUrl: './button-icon-showcase.component.html',
  styleUrls: ['./button-icon-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonIconComponent
  ]
})
export class ButtonIconShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

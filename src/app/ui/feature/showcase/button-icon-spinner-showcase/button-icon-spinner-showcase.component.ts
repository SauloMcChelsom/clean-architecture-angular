import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonIconSpinnerComponent } from 'src/app/ui/components/button-icon-spinner/button-icon-spinner.component';

@Component({
  selector: 'app-button-icon-spinner-showcase',
  templateUrl: './button-icon-spinner-showcase.component.html',
  styleUrls: ['./button-icon-spinner-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonIconSpinnerComponent
  ]
})
export class ButtonIconSpinnerShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

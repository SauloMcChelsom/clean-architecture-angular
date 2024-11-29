import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToggleOptionModel } from '../../models';

@Component({
  selector: 'ButtonToggleLabel',
  templateUrl: './button-toggle-label.component.html',
  styleUrls: ['./button-toggle-label.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    MatButtonToggleModule
  ]
})
export class ButtonToggleLabelComponent implements OnInit {
  @Input() options: ToggleOptionModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonFabComponent } from 'src/app/ui/components/button-fab/button-fab.component';

@Component({
  selector: 'app-button-fab-showcase',
  templateUrl: './button-fab-showcase.component.html',
  styleUrls: ['./button-fab-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonFabComponent
  ]
})
export class ButtonFabShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

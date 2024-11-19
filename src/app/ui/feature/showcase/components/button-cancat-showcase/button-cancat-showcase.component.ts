import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';

@Component({
  selector: 'app-button-cancat-showcase',
  templateUrl: './button-cancat-showcase.component.html',
  styleUrls: ['./button-cancat-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonCancatComponent
  ]
})
export class ButtonCancatShowcaseComponent implements OnInit {
  protected spinner: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.spinner = true;
  }
}

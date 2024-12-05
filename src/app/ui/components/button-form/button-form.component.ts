import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'ButtonForm',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ButtonFormComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() label!:string;
  @Input() icon!:string;
  @Input() load:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }


  onClickEvent() {
    this.onClick.emit();
  }

}

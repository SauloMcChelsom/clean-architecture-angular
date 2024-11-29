import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ItemCool',
  templateUrl: './item-cool.component.html',
  styleUrls: ['./item-cool.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ]
})
export class ItemCoolComponent {
  @Input() routerLink!:string
  @Input() text!:string;
}

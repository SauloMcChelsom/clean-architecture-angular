import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ItemButtonMenu',
  templateUrl: './item-button-menu.component.html',
  styleUrls: ['./item-button-menu.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ]
})
export class ItemButtonMenuComponent implements OnInit {
  @Input() routerLink!:string
  @Input() text!:string;
  constructor() { }

  ngOnInit() {
  }

}

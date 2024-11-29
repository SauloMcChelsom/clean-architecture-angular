import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ButtonCancatComponent } from '../button-cancat/button-cancat.component';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonCancatComponent,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule
  ]
})
export class SearchComponent implements OnInit {
  value = '';
  protected spinner: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.spinner = true;

    setTimeout(()=>{
      this.spinner = false;
    },2000)
  }
}

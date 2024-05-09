import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class CardComponent {
  @ContentChild('[card-title]') titleContent: any;
}
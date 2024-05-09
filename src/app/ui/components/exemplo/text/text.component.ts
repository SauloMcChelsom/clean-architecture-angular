
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'Text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
  ]
})
export class TextComponent {
  @Input() as: 'label' | 'span' = 'span';
  @Input() size: number = 14;

}
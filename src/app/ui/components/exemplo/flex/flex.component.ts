import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'Flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
  ]
})
export class FlexComponent {
  @Input() gap: number = 0;
}
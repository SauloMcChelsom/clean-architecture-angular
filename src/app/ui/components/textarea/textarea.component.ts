import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextareaInputConfig } from './enuns/dynamic-date-input.types';

@Component({
  selector: 'Textareas',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
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
export class TextareaComponent {
  @Input() config!: TextareaInputConfig;
  @Input() ariaLabel!:string;
  public isReady: boolean = false;
  
  ngOnChanges() {
    const group_components_in_screen = 260;
    const screen_height = window.innerHeight;
    let scrollHeight = screen_height - group_components_in_screen;
    const textarea = document.getElementById('textarea-content');
    textarea!.style.height = 'auto';
    textarea!.style.height = `${scrollHeight}px`; 

    setTimeout(() => {
      this.isReady = true;
    })
  }
}

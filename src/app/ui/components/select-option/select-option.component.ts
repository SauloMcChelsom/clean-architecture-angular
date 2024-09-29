import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface LOCALE_LIST {
  country: string;
  cod: string;
}

@Component({
  selector: 'SelectOption',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule, 
    MatSelectModule, 
    NgFor, 
    MatInputModule, 
    FormsModule
  ]
})
export class HotSelectOptionComponent {
  LOCALE_LIST: LOCALE_LIST[] = [
    { country: 'Portuguese (Brazil)', cod: 'pt-BR' },
    { country: 'English (United States)', cod: 'en-US' },
    { country: 'Spanish (Colombia)', cod: 'es-CO' },
  ];
  selected = this.LOCALE_LIST[0].cod;
}

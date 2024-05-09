import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexComponent } from './flex/flex.component';
import { TextComponent } from './text/text.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './card/header/header.component';
import { BodyComponent } from './card/body/body.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
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
    TextComponent,
    FlexComponent,
    CardComponent,
    HeaderComponent,
    BodyComponent
  ]
})
export class BaseComponent {}
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NoteEntity } from 'src/app/domain/entities/note.entity';


@Component({
  selector: 'NoteCard',
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
    MatCardModule,
    RouterModule
  ]
})
export class CardComponent implements OnChanges {

  @Input() link!: string;

  public card_style: string = '';
  public card_content_style = '';

  ngOnChanges() {
    this.card_content_style = "font-size: 15px;"
    this.card_style = "width: 300px; min-height: auto; max-height: 200px; overflow: hidden; text-overflow: ellipsis; white-space: normal; margin: 15px;"
  }
}

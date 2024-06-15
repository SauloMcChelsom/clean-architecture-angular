import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { NoteCardComponent } from '../card.component';
import { NoteCardTitleComponent } from '../title/title.component';
import { NoteCardTimestampComponent } from '../timestamp/timestamp.component';
import { NoteCardTextComponent } from '../text/text.component';

@Component({
  selector: 'NoteCardListAll',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    NoteCardComponent,
    NoteCardTitleComponent,
    NoteCardTimestampComponent,
    NoteCardTextComponent
  ]
})
export class NoteCardListAllComponent {

  @Input() noteList: NoteEntity[] = [];
  @Output() newItemEvent = new EventEmitter<NoteEntity>();
  @Output() viewItemEvent = new EventEmitter<NoteEntity>();
}

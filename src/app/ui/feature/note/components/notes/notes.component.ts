import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { CardComponent } from 'src/app/ui/components/card/card.component';
import { TextCardComponent } from 'src/app/ui/components/card/text/text.component';
import { TimestampCardComponent } from 'src/app/ui/components/card/timestamp/timestamp.component';
import { TitleCardComponent } from 'src/app/ui/components/card/title/title.component';

@Component({
  selector: 'Notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    CardComponent,
    TitleCardComponent,
    TimestampCardComponent,
    TextCardComponent
  ]
})
export class NotesComponent {
  @Input() noteList: NoteEntity[] = [];
  @Output() onClickEvent = new EventEmitter<NoteEntity>();
}

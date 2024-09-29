import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { GetAllNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { NotesComponent } from '../components/notes/notes.component';
import { ButtonFabComponent } from 'src/app/ui/components/button-fab/button-fab.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'PageNote',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    HeaderComponent,
    NotesComponent,
    ButtonFabComponent
  ]
})
export class NoteComponent implements OnInit {
  public noteList: NoteEntity[] = [];

  public note: NoteEntity = {
    is_favorite: false,
    text: "",
    timestamp: "",
    title: "",
    current_position: 0,
    link: ""
  }

  public  view_note: NoteEntity = {
    is_favorite: false,
    text: "",
    timestamp: "",
    title: "",
    current_position: 0,
    link: ""
  }

  private unsubscribe$ = new Subject<void>();

  constructor( private getNote:GetAllNoteUseCase) { }

  ngOnInit() {
    setTimeout(()=>{
      this.getAllNote();
    },200)
  }

  addItem($event:NoteEntity) {
    this.note = $event;
  }

  viewItem($event:NoteEntity) {
    this.view_note = $event;
  }

  getAllNote() {
    this.getNote.getAllNote().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (note: NoteEntity[]) => {
        if(!note){
          return;
        }
        this.noteList = note.map((note) => {
          return {
            ...note,
            link: `read/${note.link}`
          };
        })
        console.log('getAllNote_SUCCESSO -->', note);      
      },
      error:(err) => {
        console.log('getAllNoteERROR -->', err);
      },
      complete: ()=> {
        console.log('complete');
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

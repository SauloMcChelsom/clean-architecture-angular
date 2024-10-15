import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { GetAllNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { NotesComponent } from '../components/notes/notes.component';
import { ButtonFabComponent } from 'src/app/ui/components/button-fab/button-fab.component';
import { HeaderComponent } from '../components/header/header.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';

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
  public linkRedirectToAddScreen = `${ROUTER_LINKS.NOTE_ADD}`

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
            link: ROUTER_LINKS.NOTE_READ_BY_TITLE.replace(':title', note.link)
          };
        })   
      },
      error:(err) => {},
      complete: ()=> {}
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

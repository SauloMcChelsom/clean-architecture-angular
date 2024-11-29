import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { GetAllNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { NotesComponent } from '../components/notes/notes.component';
import { ButtonFabComponent } from 'src/app/ui/components/button-fab/button-fab.component';
import { HeaderComponent } from '../components/header/header.component';
import { ROUTING } from 'src/config/endpoints/router-links';
import {TranslateModule} from "@ngx-translate/core";
import { NavbarControlComponent } from '../components/navbar-control/navbar-control.component';
import { NavbarSortComponent } from '../components/navbar-sort/navbar-sort.component';
@Component({
  selector: 'PageNote',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    TranslateModule,
    HeaderComponent,
    NotesComponent,
    ButtonFabComponent,
    NavbarControlComponent,
    NavbarSortComponent
  ]
})
export class NoteComponent implements OnInit {
  public noteList: NoteEntity[] = [];
  public linkRedirectToAddScreen = `${ROUTING.NOTE_ADD}`;
  public numberOfNote = 0;

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
        
        this.noteList = note.map((element) => {
          this.numberOfNote = note.length;
          return {
            ...element,
            link: ROUTING.NOTE_READ_BY_TITLE.replace(':title', element.link)
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

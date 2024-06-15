import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { GetAllNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';

@Component({
  selector: 'PageNote',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class PageNoteComponent implements OnInit {
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
        this.noteList = note
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

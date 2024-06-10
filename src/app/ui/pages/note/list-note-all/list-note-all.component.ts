import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { DeleteNoteUseCase, FindNoteByLinkUseCase, GetAllNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';

@Component({
  selector: 'app-list-note-all',
  templateUrl: './list-note-all.component.html',
  styleUrls: ['./list-note-all.component.css']
})
export class ListNoteAllComponent implements OnInit {

  public noteList: NoteEntity[] = [];
  @Output() newItemEvent = new EventEmitter<NoteEntity>();
  @Output() viewItemEvent = new EventEmitter<NoteEntity>();
  private unsubscribe$ = new Subject<void>();

  constructor(
    private getNote:GetAllNoteUseCase,
    private findNoteByLink: FindNoteByLinkUseCase,
    private _delete: DeleteNoteUseCase,
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.getAllNote();
    },200)
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

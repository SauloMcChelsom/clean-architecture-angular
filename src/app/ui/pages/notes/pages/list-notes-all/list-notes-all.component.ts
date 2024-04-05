import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { DeleteNotesUseCase, FindNotesByLinkUseCase, GetAllNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';

@Component({
  selector: 'app-list-notes-all',
  templateUrl: './list-notes-all.component.html',
  styleUrls: ['./list-notes-all.component.css']
})
export class ListNotesAllComponent implements OnInit {

  public notesList: NotesEntity[] = [];
  @Output() newItemEvent = new EventEmitter<NotesEntity>();
  @Output() viewItemEvent = new EventEmitter<NotesEntity>();
  private unsubscribe$ = new Subject<void>();

  constructor(
    private getNotes:GetAllNotesUseCase,
    private findNotesByLink: FindNotesByLinkUseCase,
    private _delete: DeleteNotesUseCase,
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.getAllNotes();
    },200)
  }

  getAllNotes() {
    this.getNotes.getAllNotes().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (notes: NotesEntity[]) => {
        if(!notes){
          return;
        }
        this.notesList = notes
        console.log('getAllNotes_SUCCESSO -->', notes);      
      },
      error:(err) => {
        console.log('getAllNotesERROR -->', err);
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

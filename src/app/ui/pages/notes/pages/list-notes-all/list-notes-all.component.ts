import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { IDeleteNotesUseCase, IGetAllNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';

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
    private getNotes:IGetAllNotesUseCase,
    private _delete:IDeleteNotesUseCase
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
      },
      error:(err) => {
        console.log('getAllNotesERROR -->', err);
      },
      complete: ()=> {
        console.log('complete');
      }
    })
  }

  update(note:NotesEntity) {
    this.newItemEvent.emit(note);
  }

  view(note:NotesEntity) {
    this.viewItemEvent.emit(note);
  }

  delete(note:NotesEntity) {
    this._delete.deleteNotes(note.uid!);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

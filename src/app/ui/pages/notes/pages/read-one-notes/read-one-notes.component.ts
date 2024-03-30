import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { IDeleteNotesUseCase, IFindNotesByLinkUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { NoteStore } from 'src/app/ui/stores/add_store';

@Component({
  selector: 'app-read-one-notes',
  templateUrl: './read-one-notes.component.html',
  styleUrls: ['./read-one-notes.component.css']
})
export class ReadOneNotesComponent implements OnInit {

  protected notes!: NotesEntity;
  protected isReady:boolean = false;
  protected isErr:boolean = false;
  protected isLoad:boolean = true;
  protected textErr:string = '';

  constructor(
    private findNotesByLink: IFindNotesByLinkUseCase,
    private _delete: IDeleteNotesUseCase,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isErr = false;
    this.isLoad = true;
    const title = this.route.snapshot.params['title'];
    this.findNotesByLink.findByLinkNotes(title).subscribe({
      next: (value) => {
        console.log(value);
        this.notes = value;
        this.isReady = true;
      },
      error: (err) => {
        console.log(err);
        this.isErr = true;
        this.textErr = err;
      },
      complete: () => {
        this.isLoad = false;
      },
    })
  }

  edit() {
    this.router.navigate([`/notes/update/${this.notes.link}`])
  }

  delete() {
    this._delete.deleteNotes(this.notes.uid!).subscribe({
      error: (err) => {
        
      },
      complete: () => {
        this.router.navigate(["/notes"]);
      },
    })
  }

  view() {
  }
}

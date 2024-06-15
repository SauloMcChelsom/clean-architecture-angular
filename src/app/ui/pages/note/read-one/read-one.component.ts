import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { DeleteNoteUseCase, FindNoteByLinkUseCase } from 'src/app/domain/usecases/note/note_usecase';

@Component({
  selector: 'PageNoteReadOne',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.scss']
})
export class PageNoteReadOneComponent implements OnInit {

  protected note!: NoteEntity;
  protected isReady:boolean = false;
  protected isErr:boolean = false;
  protected isLoad:boolean = true;
  protected textErr:string = '';

  constructor(
    private findNoteByLink: FindNoteByLinkUseCase,
    private _delete: DeleteNoteUseCase,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isErr = false;
    this.isLoad = true;
    const title = this.route.snapshot.params['title'];
    this.findNoteByLink.findByLinkNote(title).subscribe({
      next: (value) => {
        console.log(value);
        this.note = value;
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
    this.router.navigate([`/note/update/${this.note.link}`])
  }

  delete() {
    this._delete.deleteNote(this.note.uid!).subscribe({
      complete: () => {
        this.router.navigate(["/note"]);
      },
    }).unsubscribe()
  }

  view() {
  }
}

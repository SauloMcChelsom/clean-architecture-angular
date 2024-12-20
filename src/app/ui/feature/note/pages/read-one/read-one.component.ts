import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { DeleteNoteUseCase, FindNoteByLinkUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { NavBarItensComponent } from 'src/app/ui/components/nav-bar/nav-bar-itens.component';
import { SnackBarComponent } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { TextareaComponent } from 'src/app/ui/components/textarea/textarea.component';
import { ROUTING } from 'src/config/endpoints/router-links';

@Component({
  selector: 'PageNoteReadOne',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    TranslateModule,
    SnackBarComponent,
    TextareaComponent,
    InputComponent,
    NavBarItensComponent,
    ButtonCancatComponent
]
})
export class PageReadOneComponent implements OnInit {

  protected note!: NoteEntity;
  protected isReady:boolean = false;
  protected isErr:boolean = false;
  protected isLoad:boolean = true;
  protected textErr:string = '';
  ROOT = ROUTING.ROOT;

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
        this.note = value;
        this.isReady = true;
      },
      error: (err) => {
        this.isErr = true;
        this.textErr = err;
      },
      complete: () => {
        this.isLoad = false;
      },
    })
  }

  edit() {
    this.router.navigate([ROUTING.NOTE_UPDATE_BY_TITLE.replace(':title', this.note.link)])
  }

  delete() {
    this._delete.deleteNote(this.note.uid!).subscribe({
      complete: () => {
        this.router.navigate([ROUTING.NOTE]);
      },
    }).unsubscribe()
  }

  view() {
  }
}

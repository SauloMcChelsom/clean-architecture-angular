import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { DeleteNoteUseCase, FindNoteByLinkUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { NavBarComponent } from 'src/app/ui/components/nav-bar/nav-bar.component';
import { SnackBarComponent } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { TextareaComponent } from 'src/app/ui/components/textarea/textarea.component';
import { Flex, Tag, Title, TextComponent } from 'src/app/ui/components/text/text.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { IS_EMAIL_ALREADY } from 'src/config/endpoints/endpoint';
import { TranslateModule } from '@ngx-translate/core';

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
    NavBarComponent,
    ButtonCancatComponent,
    TextComponent
]
})
export class PageReadOneComponent implements OnInit {

  protected note!: NoteEntity;
  protected isReady:boolean = false;
  protected isErr:boolean = false;
  protected isLoad:boolean = true;
  protected textErr:string = '';
  ROOT = ROUTER_LINKS.ROOT
  Tag=Tag;
  Flex=Flex;
  Title=Title;

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
    this.router.navigate([ROUTER_LINKS.NOTE_UPDATE_BY_TITLE.replace(':title', this.note.link)])
  }

  delete() {
    this._delete.deleteNote(this.note.uid!).subscribe({
      complete: () => {
        this.router.navigate([ROUTER_LINKS.NOTE]);
      },
    }).unsubscribe()
  }

  view() {
  }
}

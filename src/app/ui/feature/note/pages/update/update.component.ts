import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay } from 'rxjs';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { FindNoteByLinkUseCase, UpdateNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { TextInputConfig } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { NavBarComponent } from 'src/app/ui/components/nav-bar/nav-bar.component';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { TextareaInputConfig } from 'src/app/ui/components/textarea/enuns/dynamic-date-input.types';
import { TextareaComponent } from 'src/app/ui/components/textarea/textarea.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';

@Component({
  selector: 'PageNoteUpdate',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    TranslateModule,
    SnackBarComponent,
    TextareaComponent,
    InputComponent,
    NavBarComponent,
    ButtonCancatComponent
]
})
export class PageUpdateComponent implements OnInit {
  protected isReady:boolean = false;
  protected isErr:boolean = false;
  protected isLoad:boolean = true;
  protected textErr:string = '';
  public notaForm!: FormGroup;
  public config_title!: TextInputConfig;
  public config_description!: TextareaInputConfig;
  protected openSnackBar!:SnackBarModel;
  protected closeSnackBar!:any;
  protected spinner:boolean = false;
  protected ROOT = ROUTER_LINKS.ROOT;
  private titleLink:string = '';
  private charactersLong = 5;
  
    constructor(
      private fb: FormBuilder,
      private _update: UpdateNoteUseCase,
      private findNoteByLink: FindNoteByLinkUseCase,
      private route: ActivatedRoute,
      private router: Router,
      private translate: TranslateService
    ) {}
  
    ngOnInit() { 
      this.getNote();
    }

    getNote() {
      this.isErr = false;
      this.isLoad = true;
      const title = this.route.snapshot.params['title'];
      this.findNoteByLink.findByLinkNote(title).subscribe({
        next: (note) => {
          this.createInputText(note.title);
          this.createInputTextarea(note.text);
          this.buildForm(note);
          this.titleLink = note.link;
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
  
    buildForm(note: NoteEntity) {
      this.notaForm = this.fb.group({
        title: this.config_title.formControl,
        text: this.config_description.formControl,
        current_position: note.current_position,
        is_favorite: note.is_favorite,
        link: note.link,
        uid: note.uid,
        timestamp: new Date()
      });
    }

    back() {
      if(!this.titleLink) {
        window.history.back();
        return;
      }

      this.router.navigate([ROUTER_LINKS.NOTE_READ_BY_TITLE.replace(':title', this.titleLink)])
    }

    createInputText(title: string): void {
      this.config_title = {
        formControl: new FormControl<string>(title, [Validators.required, Validators.minLength(this.charactersLong)]),
        title: this.translate.instant('NOTE.LABEL_NAME_TITLE'),
        placeholder: this.translate.instant('NOTE.LABEL_REPORT_TITLE'),
        erroFill: this.translate.instant('NOTE.LABEL_NAME_FIVE', { NUM: this.charactersLong }),
        erroRequired:  this.translate.instant('NOTE.LABEL_FILLING_REQUIRED')
      };
    }
  
    createInputTextarea(text: string): void {
      this.config_description = {
        formControl: new FormControl<string>(text, [Validators.required, Validators.minLength(this.charactersLong)]),
        title:this.translate.instant('NOTE.LABEL_NAME_DESCRIPTION'),
        placeholder:  this.translate.instant('NOTE.LABEL_WRITE_HERE'),
        erroFill: this.translate.instant('NOTE.LABEL_NAME_FIVE', { NUM: this.charactersLong }),
        erroRequired:  this.translate.instant('NOTE.LABEL_FILLING_REQUIRED'),
        rows: 18
      };
    }

    update() {
      this.notaForm.markAllAsTouched();
      
      if(this.notaForm.valid === false) {
        this.openSnackBar = {
          mensagem: this.translate.instant('NOTE.LABEL_FORM_INVALID'),
          typeScoreboardColor: ScoreboardColor.WARN
        }
        return;
      }
    
      this.atualizarNota();
    }
  
    atualizarNota() {
      this.spinner = true;
  
      this._update.updateNote(this.notaForm.value).pipe(delay(5000)).subscribe({
        next: (note) => {
          this.spinner = false;
          this.openSnackBar = {
            mensagem: this.translate.instant('NOTE.LABEL_SAVE_WITH_SUCCESS'),
            typeScoreboardColor: ScoreboardColor.SUCCESS,
            time: CloseSnackBarInNow.in_5_seconds
          }
          this.titleLink = note.link
        },
        error: (err) => {
          this.spinner = false;
          this.openSnackBar = {
            mensagem: err,
            typeScoreboardColor: ScoreboardColor.WARN
          }
        },
      })
    }
}
  
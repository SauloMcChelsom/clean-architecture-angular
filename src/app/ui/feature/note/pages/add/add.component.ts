import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay } from 'rxjs';
import { CreateNewNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { TextInputConfig } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { NavBarItensComponent } from 'src/app/ui/components/nav-bar/nav-bar-itens.component';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { TextareaInputConfig } from 'src/app/ui/components/textarea/enuns/dynamic-date-input.types';
import { TextareaComponent } from 'src/app/ui/components/textarea/textarea.component';
import { AutofocusDirective } from 'src/app/ui/directives/autofocus.directive';
import { ROUTING } from 'src/config/endpoints/router-links';

@Component({
  selector: 'PageNoteAdd',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  providers:[AutofocusDirective],
  imports: [
    TranslateModule,
    SnackBarComponent,
    TextareaComponent,
    InputComponent,
    NavBarItensComponent,
    ButtonCancatComponent
  ]
})
export class PageAddComponent implements OnInit {

  public notaForm!: FormGroup;
  public config_title!: TextInputConfig;
  public config_description!: TextareaInputConfig;
  protected openSnackBar!: SnackBarModel;
  protected closeSnackBar!: any;
  protected spinner: boolean = false;
  ROOT = ROUTING.ROOT;
  protected charactersLong = 5;
  height = 0
  configTitle: FormControl<any> = new FormControl('',Validators.minLength(5))

  constructor(
    private fb: FormBuilder,
    private create: CreateNewNoteUseCase,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.createInputText();
    this.createInputTextarea();
    this.buildForm();
    this.heightDynamic()
  }

  heightDynamic() {
    const group_components_in_screen = 290;
    const screen_height = window.innerHeight;
    let scrollHeight = screen_height - group_components_in_screen;
    this.height = scrollHeight;
  }

  buildForm() {
    this.notaForm = this.fb.group({
      title: this.config_title.formControl,
      text: this.config_description.formControl,
      current_position: null,
      is_favorite: [false]
    });
  }

  add() {
    this.notaForm.markAllAsTouched();

    if (this.notaForm.valid === false) {
      this.openSnackBar = {
        mensagem:  this.translate.instant('NOTE.LABEL_FORM_INVALID'),
        typeScoreboardColor: ScoreboardColor.WARN
      }
      return;
    }

    this.adicionarNota();
  }

  createInputText(): void {
    this.config_title = {
      formControl: new FormControl<string | undefined>("", [Validators.required, Validators.minLength(this.charactersLong)]),
      title: this.translate.instant('NOTE.LABEL_NAME_TITLE'),
      placeholder: this.translate.instant('NOTE.LABEL_REPORT_TITLE'),
      erroFill: this.translate.instant('NOTE.LABEL_NAME_FIVE', { NUM: this.charactersLong }),
      erroRequired:  this.translate.instant('NOTE.LABEL_FILLING_REQUIRED')
    };
  }

  createInputTextarea(): void {
    this.config_description = {
      formControl: new FormControl<string | undefined>("", [Validators.required, Validators.minLength(this.charactersLong)]),
      title:this.translate.instant('NOTE.LABEL_NAME_DESCRIPTION'),
      placeholder:  this.translate.instant('NOTE.LABEL_WRITE_HERE'),
      erroFill: this.translate.instant('NOTE.LABEL_NAME_FIVE', { NUM: this.charactersLong }),
      erroRequired:  this.translate.instant('NOTE.LABEL_FILLING_REQUIRED')
    };
  }

  adicionarNota() {
    this.spinner = true;

    this.create.createNewNote(this.notaForm.value).pipe(delay(500)).subscribe({
      next: (v) => {
        this.notaForm.reset({
          current_position: 0,
          is_favorite: false
        });
        this.spinner = false;
        this.openSnackBar = {
          mensagem: this.translate.instant('NOTE.LABEL_SAVE_WITH_SUCCESS'),
          typeScoreboardColor: ScoreboardColor.SUCCESS,
          time: CloseSnackBarInNow.in_5_seconds
        }
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

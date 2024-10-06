import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';
import { CreateNewNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { TextInputConfig } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { NavBarComponent } from 'src/app/ui/components/nav-bar/nav-bar.component';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { TextareaInputConfig } from 'src/app/ui/components/textarea/enuns/dynamic-date-input.types';
import { TextareaComponent } from 'src/app/ui/components/textarea/textarea.component';
import { Flex, Tag, Title, TextComponent } from 'src/app/ui/components/text/text.component';

@Component({
  selector: 'PageNoteAdd',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [
    SnackBarComponent,
    TextareaComponent,
    InputComponent,
    NavBarComponent,
    TextComponent,
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
  Tag=Tag;
  Flex=Flex;
  Title=Title;

  constructor(
    private fb: FormBuilder,
    private create: CreateNewNoteUseCase
  ) { }

  ngOnInit() {
    this.createInputText();
    this.createInputTextarea();
    this.buildForm();
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
        mensagem: "Formulario Invalido",
        typeScoreboardColor: ScoreboardColor.WARN
      }
      return;
    }

    this.adicionarNota();
  }

  createInputText(): void {
    this.config_title = {
      formControl: new FormControl<string | undefined>("", [Validators.required, Validators.minLength(5)]),
      title: 'Titulo',
      placeholder: 'Informe o titulo do seu note'
    };
  }

  createInputTextarea(): void {
    this.config_description = {
      formControl: new FormControl<string | undefined>("", [Validators.required, Validators.minLength(5)]),
      placeholder: 'Escreva aqui tudo que precisa...'
    };
  }

  adicionarNota() {
    this.spinner = true;

    this.create.createNewNote(this.notaForm.value).pipe(delay(5000)).subscribe({
      next: (v) => {
        this.notaForm.reset({
          current_position: 0,
          is_favorite: false
        });
        this.spinner = false;
        this.openSnackBar = {
          mensagem: "Salvo com sucesso",
          typeScoreboardColor: ScoreboardColor.SUCCESS,
          time: CloseSnackBarInNow.in_5_seconds
        }

        console.log(v)
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

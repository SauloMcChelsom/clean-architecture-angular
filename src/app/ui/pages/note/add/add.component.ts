import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateNewNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { TextInputConfig } from 'src/app/ui/components/less/input/enuns/dynamic-date-input.types';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarModel } from 'src/app/ui/components/less/snack-bar/snack-bar.component';
import { TextareaInputConfig } from 'src/app/ui/components/less/textarea/enuns/dynamic-date-input.types';

@Component({
  selector: 'PageNoteAdd',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class PageNoteAddComponent implements OnInit {

  public notaForm!: FormGroup;
  public config_title!: TextInputConfig;
  public config_description!: TextareaInputConfig;
  protected openSnackBar!:SnackBarModel;
  protected closeSnackBar!:any;
  protected spinner:boolean = false;

  constructor(
    private fb: FormBuilder,
    private create: CreateNewNoteUseCase
  ) {}

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
    
    if(this.notaForm.valid === false) {
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
      formControl: new FormControl<string | undefined>("saulo", [Validators.required, Validators.minLength(5)]),
      title: 'Titulo',
      placeholder: 'Informe o titulo do seu note'
    };
  }

  createInputTextarea(): void {
    this.config_description = {
      formControl: new FormControl<string | undefined>("saulo", [Validators.required, Validators.minLength(5)]),
      placeholder: 'Escreva aqui tudo que precisa...'
    };
  }

  adicionarNota() {
    this.spinner = true;

    this.create.createNewNote(this.notaForm.value).subscribe({
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

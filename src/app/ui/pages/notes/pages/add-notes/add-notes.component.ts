import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateNewNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { TextInputConfig } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { TextareaInputConfig } from 'src/app/ui/components/textarea/enuns/dynamic-date-input.types';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  public notaForm!: FormGroup;
  public config_title!: TextInputConfig;
  public config_description!: TextareaInputConfig;
  protected openSnackBar!:SnackBarModel;
  protected closeSnackBar!:any;
  protected spinner:boolean = false;

  constructor(
    private fb: FormBuilder,
    private create: ICreateNewNotesUseCase
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
      formControl: new FormControl<string | undefined>(undefined, [Validators.required, Validators.minLength(5)]),
      title: 'Titulo',
      placeholder: 'Informe o titulo do seu notes'
    };
  }

  createInputTextarea(): void {
    this.config_description = {
      formControl: new FormControl<string | undefined>(undefined, [Validators.required, Validators.minLength(5)]),
      placeholder: 'Escreva aqui tudo que precisa...'
    };
  }

  adicionarNota() {
    this.spinner = true;

    this.create.createNewNotes(this.notaForm.value).subscribe({
      next: () => {
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

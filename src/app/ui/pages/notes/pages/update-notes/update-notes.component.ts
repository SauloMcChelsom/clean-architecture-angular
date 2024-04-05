import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesEntity } from 'src/app/domain/entities/notes.entity';
import { CreateNewNotesUseCase, FindNotesByLinkUseCase, UpdateNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { TextInputConfig } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { TextareaInputConfig } from 'src/app/ui/components/textarea/enuns/dynamic-date-input.types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css']
})
export class UpdateNotesComponent implements OnInit {
    
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
    private link = "/"
  
    constructor(
      private fb: FormBuilder,
      private _update: UpdateNotesUseCase,
      private findNotesByLink: FindNotesByLinkUseCase,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit() { 
      this.getNotes();
    }

    getNotes() {
      this.isErr = false;
      this.isLoad = true;
      const title = this.route.snapshot.params['title'];
      this.findNotesByLink.findByLinkNotes(title).subscribe({
        next: (notes) => {
          console.log(notes);
          this.createInputText(notes.title);
          this.createInputTextarea(notes.text);
          this.buildForm(notes);
          this.link = notes.link;
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
  
    buildForm(notes: NotesEntity) {
      this.notaForm = this.fb.group({
        title: this.config_title.formControl,
        text: this.config_description.formControl,
        current_position: notes.current_position,
        is_favorite: notes.is_favorite,
        link: notes.link,
        uid: notes.uid,
        timestamp: new Date()
      });
    }

    back() {
      console.log('back ',this.link)
      if(this.link === "/") {
        window.history.back();
        return;
      }

      this.router.navigate([`/notes/read/${this.link}`])
    }

    createInputText(title: string): void {
      this.config_title = {
        formControl: new FormControl<string>(title, [Validators.required, Validators.minLength(5)]),
        title: 'Titulo',
        placeholder: 'Informe o titulo do seu notes'
      };
    }
  
    createInputTextarea(text: string): void {
      this.config_description = {
        formControl: new FormControl<string>(text, [Validators.required, Validators.minLength(5)]),
        placeholder: 'Escreva aqui tudo que precisa...',
        rows: 18
      };
    }

    update() {
      this.notaForm.markAllAsTouched();
      
      if(this.notaForm.valid === false) {
        this.openSnackBar = {
          mensagem: "Formulario Invalido",
          typeScoreboardColor: ScoreboardColor.WARN
        }
        return;
      }
    
      this.atualizarNota();
    }
  
    atualizarNota() {
      this.spinner = true;
      console.log(this.notaForm.value) 
  
      this._update.updateNotes(this.notaForm.value).subscribe({
        next: (notes) => {
          this.spinner = false;
          this.openSnackBar = {
            mensagem: "Atualizado com sucesso",
            typeScoreboardColor: ScoreboardColor.SUCCESS,
            time: CloseSnackBarInNow.in_5_seconds
          }
          this.link = notes.link
          console.log("Sucesso ", notes)
        },
        error: (err) => {
          this.spinner = false;
          this.openSnackBar = {
            mensagem: err,
            typeScoreboardColor: ScoreboardColor.WARN
          }
          console.log("Error em atualizar ", err)
        },
      })
    }
}
  
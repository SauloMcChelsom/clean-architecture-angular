import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteEntity } from 'src/app/domain/entities/note.entity';
import { CreateNewNoteUseCase, FindNoteByLinkUseCase, UpdateNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { TextInputConfig } from 'src/app/ui/components/less/input/enuns/dynamic-date-input.types';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarModel } from 'src/app/ui/components/less/snack-bar/snack-bar.component';
import { TextareaInputConfig } from 'src/app/ui/components/less/textarea/enuns/dynamic-date-input.types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'PageNoteUpdate',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class PageNoteUpdateComponent implements OnInit {
    
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
      private _update: UpdateNoteUseCase,
      private findNoteByLink: FindNoteByLinkUseCase,
      private route: ActivatedRoute,
      private router: Router
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
          console.log(note);
          this.createInputText(note.title);
          this.createInputTextarea(note.text);
          this.buildForm(note);
          this.link = note.link;
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
      console.log('back ',this.link)
      if(this.link === "/") {
        window.history.back();
        return;
      }

      this.router.navigate([`/note/read/${this.link}`])
    }

    createInputText(title: string): void {
      this.config_title = {
        formControl: new FormControl<string>(title, [Validators.required, Validators.minLength(5)]),
        title: 'Titulo',
        placeholder: 'Informe o titulo do seu note'
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
  
      this._update.updateNote(this.notaForm.value).subscribe({
        next: (note) => {
          this.spinner = false;
          this.openSnackBar = {
            mensagem: "Atualizado com sucesso",
            typeScoreboardColor: ScoreboardColor.SUCCESS,
            time: CloseSnackBarInNow.in_5_seconds
          }
          this.link = note.link
          console.log("Sucesso ", note)
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
  
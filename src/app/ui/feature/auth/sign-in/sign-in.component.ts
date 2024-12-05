import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { delay } from 'rxjs';
import { CreateNewAccountUseCase, SignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { ButtonCancatComponent } from 'src/app/ui/components/button-cancat/button-cancat.component';
import { ButtonFormComponent } from 'src/app/ui/components/button-form/button-form.component';
import { CardComponent } from 'src/app/ui/components/card/card.component';
import { CardColorDirective } from 'src/app/ui/components/card/directive/button-toggle-label-style.directive';
import { InputTypes } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { ROUTING } from 'src/config/endpoints/router-links';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    CardComponent,
    CardColorDirective,
    InputComponent,
    RouterModule,
    SnackBarComponent,
    ButtonCancatComponent,
    ButtonFormComponent
  ]
})
export class SignInComponent implements OnInit {
  protected openSnackBar!: SnackBarModel;
  protected closeSnackBar!: any;
  protected REGISTER = ROUTING.AUTH_REGISTER;
  ROOT = ROUTING.ROOT;
  protected form!: FormGroup;
  protected buttonFormLoad: boolean = false;

  emailUser = {
    formControl: new FormControl<string | undefined>("", Validators.email),
    title: 'E-mail',
    placeholder: 'Digite seu e-mail',
    erroFill: "Por favor, insira um e-mail válido.",
    erroRequired: "O e-mail é obrigatório.",
    type: 'email' as InputTypes,
    isRequired: true,
    minLength: 5
  };

  passwordUser = {
    formControl: new FormControl<string | undefined>(""),
    title: 'Senha',
    placeholder: 'Digite seu senha',
    erroFill: "Insira uma combinação de pelo menos seis números, letras, sinais de pontuação e símbolos (como ! e &).",
    erroRequired: "O senha é obrigatório.",
    type: 'password' as InputTypes,
    isRequired: true,
    minLength: 6
  };
  constructor(
    private fb: FormBuilder,
    private auth: SignInWithEmailAndPassworUseCase
  ) { 
    this.form = this.fb.group({
      email: this.emailUser.formControl,
      password: this.passwordUser.formControl,
    });
  }

  ngOnInit() {
  }

  signIn() {

  }

  onSubmit() {
    this.emailUser.formControl.markAsTouched();
    this.passwordUser.formControl.markAsTouched();

    if (!this.form.valid) {
      this.errSnackBar('Formulario deve ser preenchido');
      return;
    }
    this.buttonFormLoad = true;
    this.auth.signInWithEmailAndPassword(this.emailUser.formControl.value!, this.passwordUser.formControl.value!).pipe(delay(2000)).subscribe({
      next: (res) => {
        this.buttonFormLoad = false;
        this.sucsessSnackBar('Logando com sucesso!');
        console.log(res);
      },
      error: (err) => {
        this.errSnackBar(err);
        this.buttonFormLoad = false;
      },
      complete: () => {
        this.buttonFormLoad = false;
      },
    })
  }

  errSnackBar(mensagem: string) {
    this.openSnackBar = {
      mensagem: mensagem,
      typeScoreboardColor: ScoreboardColor.WARN,
      time: CloseSnackBarInNow.in_10_seconds
    }
  }

  sucsessSnackBar(mensagem: string) {
    this.openSnackBar = {
      mensagem: mensagem,
      typeScoreboardColor: ScoreboardColor.SUCCESS
    }
  }

  back() {
    history.back()
  }
}

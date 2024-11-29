import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
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
    SnackBarComponent
  ]
})
export class SignInComponent implements OnInit {
  protected openSnackBar!: SnackBarModel;
  protected closeSnackBar!: any;
  protected REGISTER = ROUTING.AUTH_REGISTER;

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
    formControl: new FormControl<string | undefined>("", Validators.email),
    title: 'Senha',
    placeholder: 'Digite seu senha',
    erroFill: "Insira uma combinação de pelo menos seis números, letras, sinais de pontuação e símbolos (como ! e &).",
    erroRequired: "O senha é obrigatório.",
    type: 'password' as InputTypes,
    isRequired: true,
    minLength: 6
  };
  constructor() { }

  ngOnInit() {
  }

  signIn() {
    this.errSnackBar()
  }

  errSnackBar() {
    this.openSnackBar = {
      mensagem: "Error em processar",
      typeScoreboardColor: ScoreboardColor.WARN,
      time: CloseSnackBarInNow.in_10_seconds
    }
  }

  sucsessSnackBar() {
    this.openSnackBar = {
      mensagem: "Parabens voce acertou",
      typeScoreboardColor: ScoreboardColor.SUCCESS
    }
  }
}

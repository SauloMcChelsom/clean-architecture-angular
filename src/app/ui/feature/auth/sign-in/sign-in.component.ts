import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/ui/components/card/card.component';
import { CardColorDirective } from 'src/app/ui/components/card/directive/button-toggle-label-style.directive';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';

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
  protected REGISTER = ROUTER_LINKS.REGISTER;

  config = {
    formControl: new FormControl<string | undefined>(""),
    title: 'Titulo',
    placeholder: 'Informe o titulo do seu note',
    erroFill: "O nome deve ter pelo menos 5 caracteres",
    erroRequired: "Preenchimento obrigatório"
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

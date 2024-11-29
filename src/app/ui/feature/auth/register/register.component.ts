import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/ui/components/card/card.component';
import { CardColorDirective } from 'src/app/ui/components/card/directive/button-toggle-label-style.directive';
import { InputComponent } from 'src/app/ui/components/input/input.component';
import { InputTypes } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { CloseSnackBarInNow, ScoreboardColor, SnackBarComponent, SnackBarModel } from 'src/app/ui/components/snack-bar/snack-bar.component';
import { ROUTING } from 'src/config/endpoints/router-links';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DynamicDateInputComponent } from 'src/app/ui/components/dynamic-date-input/component/dynamic-date-input.component';

import { DateInputConfig } from 'src/app/ui/components/dynamic-date-input/enuns/dynamic-date-input.types';
import { ButtonToggleGroupComponent } from 'src/app/ui/components/button-toggle/button-toggle.component';
import { ButtonToggleLabelStyleWidthFullDirective } from 'src/app/ui/components/button-toggle/directive/button-toggle-label-style.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CommonModule,
    MatButtonModule,
    CardComponent,
    CardColorDirective,
    InputComponent,
    RouterModule,
    SnackBarComponent,
    DynamicDateInputComponent,
    ButtonToggleGroupComponent,
    ButtonToggleLabelStyleWidthFullDirective
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class RegisterComponent implements OnInit {

  protected openSnackBar!: SnackBarModel;
  protected closeSnackBar!: any;
  protected SIGN_IN = ROUTING.AUTH_SIGN_IN;
  protected form!: FormGroup;
 
  nameUser = {
    formControl: new FormControl<string | undefined>(""),
    title: 'Nome',
    placeholder: 'Digite seu nome',
    erroFill: "O nome deve ter pelo menos 3 caracteres.",
    erroRequired: "O nome é obrigatório.",
    type: 'text' as InputTypes,
    isRequired: true,
    minLength: 3
  };

  lastNameUser = {
    formControl: new FormControl<string | undefined>(""),
    title: 'Sobrenome',
    placeholder: 'Digite seu sobrenome',
    erroFill: "O Sobrenome deve ter pelo menos 3 caracteres.",
    erroRequired: "O sobrenome é obrigatório.",
    type: 'text' as InputTypes,
    isRequired: true,
    minLength: 3
  };

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

  birthdayUser: DateInputConfig = {
    formControl: new FormControl(''),
    locale: "pt-br",
    mask: "dd/mm/yyyy",
    maxDate: new Date('Thu Oct 10 2024 00:00:00 GMT-0300'),
    minDate: new Date('Wed Oct 10 1990 00:00:00 GMT-0300 '),
    placeholder: "Informe sua data",
    requiredField: true,
    showHint: false,
    title: "Data de Nascimento"
  };

  genderUser = {
    formControl: new FormControl<string | undefined>("", Validators.required),
    multiple: false,
    options: [
      { label: 'Masculino', value: 'masculine' },
      { label: 'Feminino', value: 'feminine' }
    ]
  };


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: this.emailUser.formControl,
      name: this.nameUser.formControl,
      LastName: this.lastNameUser.formControl,
      password: this.passwordUser.formControl,
      birthday: this.birthdayUser.formControl,
      gender: this.genderUser.formControl,
    });
  }

  ngOnInit() {
  }

  signIn() {
    this.errSnackBar()
    console.log(this.form.value)
    console.log(this.form.status)
  }

  onSubmit() {

  }    
          
  onSingleSelectionChange(value: any) {
    console.log('Selected color:', value);
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

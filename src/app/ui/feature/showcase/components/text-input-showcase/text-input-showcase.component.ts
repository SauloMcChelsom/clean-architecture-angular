import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TextInputConfig } from 'src/app/ui/components/input/enuns/dynamic-date-input.types';
import { InputComponent } from 'src/app/ui/components/input/input.component';

@Component({
  selector: 'app-text-input-showcase',
  templateUrl: './text-input-showcase.component.html',
  styleUrls: ['./text-input-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
  ]
})
export class TextInputShowcaseComponent {

  config = {
    formControl: new FormControl<string | undefined>(""),
    title: 'Titulo',
    placeholder: 'Informe o titulo do seu note',
    erroFill: "O nome deve ter pelo menos 5 caracteres",
    erroRequired: "Preenchimento obrigatório"
  };

  @ViewChild(InputComponent) InputComponent!: InputComponent;


  reset(){
    this.InputComponent.resetToInitialState()
  }

  disable(){
    this.InputComponent.disable()
  }
  enable(){
    this.InputComponent.enable()
  }
}

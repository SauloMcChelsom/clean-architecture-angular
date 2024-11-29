import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from 'src/app/ui/components/input/input.component';

@Component({
  selector: 'app-text-input-showcase',
  templateUrl: './text-input-showcase.component.html',
  styleUrls: ['./text-input-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    MatButtonModule
  ]
})
export class TextInputShowcaseComponent {
  codes = [
    `
    import { InputComponent } from 'src/app/ui/components/input/input.component';
    `,
    `
    <Inputs 
      [formControl]="config.formControl" 
      [title]="config.title" 
      [placeholder]="config.placeholder"
      [erroFill]="config.erroFill" 
      [erroRequired]="config.erroRequired" 
      [isRequired]="true" 
      [minLength]="5"
    ></Inputs>
    `,
    `
    config = {
      formControl: new FormControl<string | undefined>(""),
      title: 'Titulo',
      placeholder: 'Informe o titulo do seu note',
      erroFill: "O nome deve ter pelo menos 5 caracteres",
      erroRequired: "Preenchimento obrigatório"
    };
    `,
    `
    
    `,
  ];
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

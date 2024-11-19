import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextareaComponent } from 'src/app/ui/components/textarea/textarea.component';

@Component({
  selector: 'app-textareas-input-showcase',
  templateUrl: './textareas-input-showcase.component.html',
  styleUrls: ['./textareas-input-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TextareaComponent
  ]
})
export class TextareasInputShowcaseComponent {

  config = {
    formControl: new FormControl<string | undefined>(""),
    title: 'Titulo',
    placeholder: 'Informe o titulo do seu note',
    erroFill: "O nome deve ter pelo menos 5 caracteres",
    erroRequired: "Preenchimento obrigatório"
  };

  @ViewChild(TextareaComponent) InputComponent!: TextareaComponent;


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

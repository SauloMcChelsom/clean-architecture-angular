import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CheckboxComponent } from 'src/app/ui/components/checkbox/checkbox.component';
import { Task } from 'src/app/ui/components/checkbox/models';

@Component({
  selector: 'app-checkbox-input-showcase',
  templateUrl: './checkbox-input-showcase.component.html',
  styleUrls: ['./checkbox-input-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CheckboxComponent
  ]
})
export class CheckboxInputShowcaseComponent {

  formControl = new FormControl<string | undefined>("");
  
  task:Task[] = [
    { name: 'Gatos', color: 'primary', checked: false, disabled: false, cod: 'cat' },
    { name: 'Cachorros', color: 'primary', checked: true,  disabled: false, cod: 'dog' }
  ];

  onSelect($event:string){
    console.log($event)
  }

  @ViewChild(CheckboxComponent) InputComponent!: CheckboxComponent;

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

import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChipOptionComponent } from 'src/app/ui/components/chip-option/chip-option.component';
import { ChipOptionModel } from 'src/app/ui/components/chip-option/models';

@Component({
  selector: 'app-chip-option-showcase',
  templateUrl: './chip-option-showcase.component.html',
  styleUrls: ['./chip-option-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChipOptionComponent
  ]
})
export class ChipOptionShowcaseComponent {

  config = {
    formControl: new FormControl(['one_fish']),
  }

  chipList:ChipOptionModel[] = [
    { label: 'One fish', cod: 'one_fish',  color: 'primary', disabled: false },
    { label: 'Two fish', cod: 'two_fish',  color: 'primary', disabled: false },
    { label: 'Accent fish', cod: 'accent_fish',  color: 'primary', disabled: false },
    { label: 'Warn fish', cod: 'warn_fish',  color: 'warn', disabled: true },
  ];

  @ViewChild(ChipOptionComponent) InputComponent!: ChipOptionComponent;


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

import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateService } from '@ngx-translate/core';
import { SelectOptionModel } from 'src/app/ui/components/select-option/models';
import { SelectOptionComponent } from 'src/app/ui/components/select-option/select-option.component';

@Component({
  selector: 'app-select-option-showcase',
  templateUrl: './select-option-showcase.component.html',
  styleUrls: ['./select-option-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    SelectOptionComponent,
    MatButtonModule
  ]
})
export class SelectOptionShowcaseComponent {
  codes = [
    `
    <SelectOption 
      [formControl] = "config.formControl"
      [placeholder] = "config.selectEmpy"
      [isRequired] = "config.requiredField"
      [isDisabled] = "config.disableField"
      [options] = "config.selections"
    ></SelectOption>
    `,
    `
    config: SelectOptionModel = {
      formControl: new FormControl(''),
      selectEmpy: this.translate.instant('NOTE.OPTION_EMPY'),
      requiredField: true,
      disableField: false,
      selections: [
        { description: 'Portuguese (Brazil)', cod: 'pt-BR' },
        { description: 'English (United States)', cod: 'en-US' },
        { description: 'Spanish (Colombia)', cod: 'es-CO' },
      ]
    };
    `,
    `
    @ViewChild(SelectOptionComponent) selectOptionComponent!: SelectOptionComponent;
    `,
    `
    constructor(private translate: TranslateService) {}
    `,
    `
    reset(){
      this.selectOptionComponent.resetToInitialState()
    }

    disable(){
      this.selectOptionComponent.disable()
    }

    enable(){
      this.selectOptionComponent.enable()
    }
    `,
  ]

  config: SelectOptionModel = {
    formControl: new FormControl(''),
    selectEmpy: this.translate.instant('NOTE.OPTION_EMPY'),
    requiredField: true,
    disableField: false,
    selections: [
      { description: 'Portuguese (Brazil)', cod: 'pt-BR' },
      { description: 'English (United States)', cod: 'en-US' },
      { description: 'Spanish (Colombia)', cod: 'es-CO' },
    ]
  };

  @ViewChild(SelectOptionComponent) selectOptionComponent!: SelectOptionComponent;
  
  constructor(private translate: TranslateService) {}

  reset(){
    this.selectOptionComponent.resetToInitialState()
  }

  disable(){
    this.selectOptionComponent.disable()
  }
  enable(){
    this.selectOptionComponent.enable()
  }
}

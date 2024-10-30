import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DynamicDateInputComponent } from 'src/app/ui/components/dynamic-date-input/component/dynamic-date-input.component';
import { DateInputConfig } from 'src/app/ui/components/dynamic-date-input/enuns/dynamic-date-input.types';

@Component({
  selector: 'app-date-input-showcase',
  templateUrl: './date-input-showcase.component.html',
  styleUrls: ['./date-input-showcase.component.scss'],
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  imports:[
    CommonModule,
    DynamicDateInputComponent
  ]
})
export class DateInputShowcaseComponent {

  panelOpenState = false;
  
  config: DateInputConfig = {
    formControl: new FormControl('2020-10-13'),
    locale: "pt-br",
    mask: "dd/mm/yyyy",
    maxDate: new Date('Thu Oct 10 2024 00:00:00 GMT-0300'),
    minDate: new Date('Wed Oct 10 1990 00:00:00 GMT-0300 '),
    placeholder: "Informe sua data",
    requiredField: true,
    showHint: false,
    title: "Data de Nascimento"
  };

  @ViewChild(DynamicDateInputComponent) DynamicDateInputComponent!: DynamicDateInputComponent;


  reset(){
    this.DynamicDateInputComponent.resetToInitialState()
  }

  disable(){
    this.DynamicDateInputComponent.disable()
  }
  enable(){
    this.DynamicDateInputComponent.enable()
  }
}

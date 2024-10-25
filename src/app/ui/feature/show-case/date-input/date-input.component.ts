import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { DateInputConfig } from 'src/app/ui/components/dynamic-date-input/enuns/dynamic-date-input.types';

interface LOCALE_LIST {
  country: string;
  cod: string;
}

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
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
export class DateInputComponent {
  dateControl = new FormControl<Date | undefined>(undefined);
  config?: DateInputConfig;
  form = new FormGroup({
    title: new FormControl<any>(''),
    showHint: new FormControl<any>(false),
    requiredField: new FormControl<any>(false),
    mask: new FormControl<any>(undefined),
    placeholder: new FormControl<any>(''),
    dataminselected : new FormControl<any>(undefined),
    datamaxselected : new FormControl<any>(undefined),
    dateselected    : new FormControl<any>(undefined)
  });
  LOCALE_LIST: LOCALE_LIST[] = [
    {country: 'Portuguese (Brazil)', cod: 'pt-br'},
    {country: 'English (United States)', cod: 'en-us'},
    {country: 'Spanish (Colombia)', cod: 'es-co'},
    {country: 'Japan', cod: 'ja-JP'},
  ];
  selected = this.LOCALE_LIST[0].cod;


  createInputDate(): void {
    if(this.form.get('dateselected')?.value){
      this.dateControl.setValue(new Date(this.form.get('dateselected')?.value))
    }

    const datamaxselected = this.form.get('datamaxselected')?.value
    const dataminselected = this.form.get('dataminselected')?.value

    this.config = {
      formControl: this.dateControl,
      locale:this.selected,
      maxDate:datamaxselected ? new Date(datamaxselected) : undefined,
      minDate:dataminselected ? new Date(dataminselected) : undefined,
      title: this.form.get('title')?.value,
      showHint: this.form.get('showHint')?.value,
      requiredField: this.form.get('requiredField')?.value,
      mask: this.form.get('mask')?.value,
      placeholder: this.form.get('placeholder')?.value,
    };
  }
  
  resetInputDate(): void {
    this.config = undefined;
    this.form.reset();
    this.dateControl.reset();
    this.selected = this.LOCALE_LIST[0].cod;
  }
  setShowHint(checked: boolean): void {
    this.form.get('showHint')?.setValue(checked);
  }
  setRequiredField(checked: boolean): void {
    this.form.get('requiredField')?.setValue(checked);
  }
}
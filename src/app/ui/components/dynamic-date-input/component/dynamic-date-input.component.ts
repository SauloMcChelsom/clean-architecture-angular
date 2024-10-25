import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from "@angular/material/core";
import { MatDatepicker } from '@angular/material/datepicker';
import 'moment/locale/pt-br';
//import * as moment from "moment/moment";
import moment from 'moment';
import { FORMAT_MONTH_AND_YEAR, FORMAT_YEAR_AND_MONTH } from '../constants/dynamic-date-input.constants';

import { DateInputConfig } from "../enuns/dynamic-date-input.types";
import { startViewCalendar } from '../enuns/dynamic-date-input.enum';

@Component({
  selector: 'DynamicDate',
  templateUrl: './dynamic-date-input.component.html',
  styleUrls: ['./dynamic-date-input.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
  ],
})
export class DynamicDateInputComponent implements OnInit, AfterViewInit {
  @Input() editStyle!:string;
  @Input() config!: DateInputConfig;
  @ViewChild('dateInput') dateInput!: ElementRef<HTMLInputElement>;
  mask!: string;
  minDate: Date | undefined = undefined;
  maxDate: Date | undefined = undefined;

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    @Inject(MAT_DATE_FORMATS) private _formats: MatDateFormats
  ) { }

  ngOnInit(): void {
    this.mask = this.config.mask;
    this.insertTranslationInCalendar()
    this.insertMaskInTheField()
    this.minDateOrMaxDateIsFilled()
    this.setIntervalDateTime()
    this.setRequired(this.config.requiredField);
  }

  insertTranslationInCalendar(){
    this._locale = this.config.locale!;
    this._adapter.setLocale(this._locale);
  }

  insertMaskInTheField(){
    const DATE_FORMAT = this.mask.toUpperCase();
    this._formats.parse.dateInput = DATE_FORMAT
    this._formats.display.dateInput = DATE_FORMAT
  }

  minDateOrMaxDateIsFilled(){
    if (this.config.minDate != undefined || this.config.maxDate != undefined) {
      if(this.fieldIsRequired()){
        this.showBordeRedInField()
      }
    }
  }

  showBordeRedInField(){
    this.config.formControl.markAsTouched();
  }

  fieldIsRequired():boolean{
    return this.config.requiredField
  }

  setIntervalDateTime(){
    this.minDate = this.config.minDate;
    this.maxDate = this.config.maxDate;
  }

  setRequired(checked: boolean): void {
    if (checked) {
      this.config.formControl?.addValidators(Validators.required);
    } else {
      this.config.formControl?.removeValidators(Validators.required);
    }
  }
  
  ngAfterViewInit(): void {
    this._locale = this.config.locale!
    Inputmask('datetime', {
      inputFormat: this.mask,
      placeholder: this.mask.toUpperCase(),
      alias: 'datetime',
      clearMaskOnLostFocus: true
    }).mask(this.dateInput.nativeElement);
  }

  writeValue(value: any): void {
    if (!value) {
      return;
    }
    this.config.formControl?.setValue(value);
  }

  get TYPE_CALENDA(): any {
    if (this.mask == FORMAT_MONTH_AND_YEAR || this.mask == FORMAT_YEAR_AND_MONTH) {
      return startViewCalendar.MULTI_YEAR;
    }
    return startViewCalendar.MONTH;
  }

  setMonthAndYear(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    if (this.mask !== FORMAT_MONTH_AND_YEAR && this.mask !== FORMAT_YEAR_AND_MONTH) {
      return;
    }

    const date = new FormControl(moment());
    const ctrlValue = date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    date.setValue(ctrlValue);
    this.config.formControl.setValue(date.value);
    datepicker.close();
  }
}
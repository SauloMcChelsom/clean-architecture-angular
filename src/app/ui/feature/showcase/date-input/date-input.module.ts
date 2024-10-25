import { CommonModule, NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { DynamicDateInputModule } from 'src/app/ui/components/dynamic-date-input/dynamic-date-input.modules';
import { DateInputComponent } from './date-input.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    DynamicDateInputModule,
    FormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    NgForOf,
    NgxMaskModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  declarations: [DateInputComponent],
  exports:[DateInputComponent]
})
export class DateInputModule { }
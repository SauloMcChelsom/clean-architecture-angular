import { FormControl } from "@angular/forms";

export interface TextInputConfig {
    formControl: FormControl<any>;
    title?: string;
    placeholder?: string;
    valueDefault?: string;
    erroRequired?: string;
    erroFill?: string;
}

export type InputTypes =
| 'text'
| 'password'
| 'email'
| 'number'
| 'tel'
| 'url'
| 'search'
| 'color'
| 'date'
| 'datetime-local'
| 'month'
| 'week'
| 'time'
| 'checkbox'
| 'radio'
| 'range'
| 'file'
| 'image'
| 'button'
| 'submit'
| 'reset'
| 'hidden';
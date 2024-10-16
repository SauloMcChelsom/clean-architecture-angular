import { FormControl } from "@angular/forms";

export interface TextInputConfig {
    formControl: FormControl<any>;
    title?: string;
    placeholder?: string;
    valueDefault?: string;
    erroRequired?: string;
    erroFill?: string;
}
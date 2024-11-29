import { FormControl } from "@angular/forms";

export interface TextareaInputConfig {
    formControl: FormControl<any>;
    title:string;
    placeholder?: string;
    valueDefault?: string;
    rows?: number;
    scrollHeight?: number;
    erroRequired?: string;
    erroFill?: string;
}
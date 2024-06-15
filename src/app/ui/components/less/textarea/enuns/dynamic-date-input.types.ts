import { FormControl } from "@angular/forms";

export interface TextareaInputConfig {
    formControl: FormControl<any>;
    placeholder?: string;
    valueDefault?: string;
    rows?: number;
    scrollHeight?: number;
}
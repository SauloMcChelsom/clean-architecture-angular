import { FormControl } from "@angular/forms";

export interface DateInputConfig {
    minDate?: Date;
    maxDate?: Date;
    mask: string;
    formControl: FormControl<any>;
    showHint: boolean;
    locale?: string;
    requiredField: boolean;
    title?: string;
    placeholder?: string;
    prefix?: string;
}
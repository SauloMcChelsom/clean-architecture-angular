import { FormControl } from "@angular/forms";

export interface SelectionModel {
    description: string;
    cod: string;
}

export interface SelectOptionModel {
    formControl: FormControl<any>;
    selectEmpy: string;
    requiredField: boolean;
    disableField: boolean;
    selections: SelectionModel[];
}
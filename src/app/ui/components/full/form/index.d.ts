import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, ValidatorFn, ɵFormGroupRawValue, ɵFormGroupValue, ɵOptionalKeys, ɵTypedOrUntyped } from "@angular/forms";

export declare class CustomFormGroup<TControl extends {
    [K in keyof TControl]: AbstractControl<any>;
} = any> extends AbstractControl<ɵTypedOrUntyped<TControl, ɵFormGroupValue<TControl>, any>, ɵTypedOrUntyped<TControl, ɵFormGroupRawValue<TControl>, any>> {

    constructor(controls: TControl, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
    controls: ɵTypedOrUntyped<TControl, TControl, {
        [key: string]: AbstractControl<any>;
    }>;

    registerControl<K extends string & keyof TControl>(name: K, control: TControl[K]): TControl[K];
    registerControl(this: CustomFormGroup<{
        [key: string]: AbstractControl<any>;
    }>, name: string, control: AbstractControl<any>): AbstractControl<any>;

    addControl(this: CustomFormGroup<{
        [key: string]: AbstractControl<any>;
    }>, name: string, control: AbstractControl, options?: {
        emitEvent?: boolean;
    }): void;
    addControl<K extends string & keyof TControl>(name: K, control: Required<TControl>[K], options?: {
        emitEvent?: boolean;
    }): void;
    removeControl(this: CustomFormGroup<{
        [key: string]: AbstractControl<any>;
    }>, name: string, options?: {
        emitEvent?: boolean;
    }): void;
    removeControl<S extends string>(name: ɵOptionalKeys<TControl> & S, options?: {
        emitEvent?: boolean;
    }): void;

    setControl<K extends string & keyof TControl>(name: K, control: TControl[K], options?: {
        emitEvent?: boolean;
    }): void;
    setControl(this: CustomFormGroup<{
        [key: string]: AbstractControl<any>;
    }>, name: string, control: AbstractControl, options?: {
        emitEvent?: boolean;
    }): void;

    contains<K extends string>(controlName: K): boolean;
    contains(this: CustomFormGroup<{
        [key: string]: AbstractControl<any>;
    }>, controlName: string): boolean;

    setValue(value: ɵFormGroupRawValue<TControl>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
   
    patchValue(value: ɵFormGroupValue<TControl>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    reset(value?: ɵTypedOrUntyped<TControl, ɵFormGroupValue<TControl>, any>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    getRawValue(): ɵTypedOrUntyped<TControl, ɵFormGroupRawValue<TControl>, any>;
}

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [CustomFormGroup]
})
export class CustomFormModule { }
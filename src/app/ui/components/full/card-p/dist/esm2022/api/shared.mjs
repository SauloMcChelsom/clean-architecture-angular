import { Component, Directive, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class Header {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Header, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Header, isStandalone: true, selector: "p-header", ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Header, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-header',
                    standalone: true,
                    template: '<ng-content></ng-content>'
                }]
        }] });
export class Footer {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Footer, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Footer, isStandalone: true, selector: "p-footer", ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Footer, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-footer',
                    standalone: true,
                    template: '<ng-content></ng-content>'
                }]
        }] });
export class PrimeTemplate {
    template;
    type;
    name;
    constructor(template) {
        this.template = template;
    }
    getType() {
        return this.name;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimeTemplate, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PrimeTemplate, isStandalone: true, selector: "[pTemplate]", inputs: { type: "type", name: ["pTemplate", "name"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimeTemplate, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pTemplate]',
                    standalone: true,
                    host: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; }, propDecorators: { type: [{
                type: Input
            }], name: [{
                type: Input,
                args: ['pTemplate']
            }] } });
export class SharedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedModule, imports: [Header, Footer, PrimeTemplate], exports: [Header, Footer, PrimeTemplate] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Header, Footer, PrimeTemplate],
                    exports: [Header, Footer, PrimeTemplate]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBpL3NoYXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQU9uRixNQUFNLE9BQU8sTUFBTTt3R0FBTixNQUFNOzRGQUFOLE1BQU0sb0VBRkwsMkJBQTJCOzs0RkFFNUIsTUFBTTtrQkFMbEIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3hDOztBQVFELE1BQU0sT0FBTyxNQUFNO3dHQUFOLE1BQU07NEZBQU4sTUFBTSxvRUFGTCwyQkFBMkI7OzRGQUU1QixNQUFNO2tCQUxsQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDeEM7O0FBUUQsTUFBTSxPQUFPLGFBQWE7SUFLSDtJQUpWLElBQUksQ0FBcUI7SUFFZCxJQUFJLENBQXFCO0lBRTdDLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUcsQ0FBQztJQUVqRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSyxDQUFDO0lBQ3RCLENBQUM7d0dBVFEsYUFBYTs0RkFBYixhQUFhOzs0RkFBYixhQUFhO2tCQUx6QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLEVBQUU7aUJBQ1g7a0dBRVksSUFBSTtzQkFBWixLQUFLO2dCQUVjLElBQUk7c0JBQXZCLEtBQUs7dUJBQUMsV0FBVzs7QUFhdEIsTUFBTSxPQUFPLFlBQVk7d0dBQVosWUFBWTt5R0FBWixZQUFZLFlBOUJaLE1BQU0sRUFPTixNQUFNLEVBT04sYUFBYSxhQWRiLE1BQU0sRUFPTixNQUFNLEVBT04sYUFBYTt5R0FnQmIsWUFBWTs7NEZBQVosWUFBWTtrQkFKeEIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUM7aUJBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBOZ01vZHVsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwLWhlYWRlcicsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIHt9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncC1mb290ZXInLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlciB7fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1twVGVtcGxhdGVdJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBob3N0OiB7fVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJpbWVUZW1wbGF0ZSB7XHJcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgQElucHV0KCdwVGVtcGxhdGUnKSBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG5cclxuICAgIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lITtcclxuICAgIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtIZWFkZXIsIEZvb3RlciwgUHJpbWVUZW1wbGF0ZV0sXHJcbiAgICBleHBvcnRzOiBbSGVhZGVyLCBGb290ZXIsIFByaW1lVGVtcGxhdGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge30iXX0=
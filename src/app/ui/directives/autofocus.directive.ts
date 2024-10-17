import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appAutofocus]'
})
export class AutofocusDirective {
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.el.nativeElement.focus();
    }
}
//<button appAutofocus>add</button>
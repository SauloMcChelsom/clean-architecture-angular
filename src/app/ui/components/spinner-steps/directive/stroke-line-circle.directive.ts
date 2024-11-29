import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: "[appStrokeLineCircle]",
    standalone: true
})
export class StrokeLineCircleDirective implements AfterViewInit {

    constructor(private elem: ElementRef) {}

    ngAfterViewInit() {
        const element = this.elem.nativeElement;
        const circle = element.querySelector("circle");
        circle.style.strokeLinecap = 'round';
    }
}
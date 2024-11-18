import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextDefault]',
  standalone: true
})
export class textDefaultDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.classList.add('text-default');
  }
}
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimaryColor]',
  standalone: true
})
export class PrimaryColorDirective {
  constructor(private elementRef: ElementRef) {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--app-primary');
    this.elementRef.nativeElement.style.color = primaryColor;
  }
}
//<div appPrimaryColor>Text</div>
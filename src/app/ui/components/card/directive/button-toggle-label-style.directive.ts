import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class CardColorDirective implements AfterViewInit {

  @Input() appColor: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const card = this.el.nativeElement.querySelector('mat-card');
    if (card) {
      card.style.setProperty('background-color', `var(${this.appColor})`, 'important');
    }
  }
}

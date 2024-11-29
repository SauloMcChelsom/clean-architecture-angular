import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: "[appStrokeColor]",
  standalone: true
})
export class StrokeColorDirective implements AfterViewInit {

  @Input() appStrokeColor!: string;

  constructor(
    private elem: ElementRef
  ) { }

  ngAfterViewInit() {
    if (!!this.appStrokeColor) {
      const element = this.elem.nativeElement;
      const circle = element.querySelector("circle");
      circle.style.stroke = this.appStrokeColor;
      circle.style.strokeOpacity = 0.2

    }
  }
}
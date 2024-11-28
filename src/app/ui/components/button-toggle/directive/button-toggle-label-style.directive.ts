import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonToggLabelStyleWidthFull]',
  standalone: true
})
export class ButtonToggleLabelStyleWidthFullDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const group = this.el.nativeElement.querySelector('mat-button-toggle-group');
    const content = this.el.nativeElement.querySelector('mat-button-toggle');
    
    if (group && content) {
      this.renderer.setStyle(group, 'width', '100%');
      this.renderer.setStyle(content, 'width', '100%');
    }
  }

}

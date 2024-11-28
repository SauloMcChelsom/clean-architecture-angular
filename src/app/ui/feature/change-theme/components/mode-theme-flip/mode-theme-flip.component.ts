import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ButtonToggleGroupComponent } from 'src/app/ui/components/button-toggle/button-toggle.component';
import { ButtonToggleLabelComponent } from 'src/app/ui/components/button-toggle/component/button-toggle-label/button-toggle-label.component';
import { ButtonToggleLabelStyleWidthFullDirective } from 'src/app/ui/components/button-toggle/directive/button-toggle-label-style.directive';

@Component({
  selector: 'ModeThemeFlip',
  templateUrl: './mode-theme-flip.component.html',
  styleUrls: ['./mode-theme-flip.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ButtonToggleGroupComponent,
    ButtonToggleLabelComponent,
    ButtonToggleLabelStyleWidthFullDirective
  ]
})
export class ModeThemeFlipComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  control = new FormControl<string | undefined>('');
          
  onSingleSelectionChange(value: any) {
    const isDark = value.length == 1 ? true : false;
    if(isDark){
      this.renderer.removeClass(document.body, 'light');
      this.renderer.addClass(document.body, 'dark');
      return
    }

    this.renderer.removeClass(document.body, 'dark');
    this.renderer.addClass(document.body, 'light');
  }

}

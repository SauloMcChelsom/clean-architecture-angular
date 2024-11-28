import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SlideToggleComponent } from 'src/app/ui/components/slide-toggle/slide-toggle.component';
    
@Component({
  selector: 'ModeTheme',
  templateUrl: './mode-theme.component.html',
  styleUrls: ['./mode-theme.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SlideToggleComponent
  ]
})
export class ModeThemeComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
  
  config = {
    formControl:  new FormControl(false)
  }

  onToggleChange(value: boolean) {
    if(value){
      console.log('deve escurecer:');
      this.renderer.removeClass(document.body, 'light');
      this.renderer.addClass(document.body, 'dark');
      return
    }
    this.renderer.removeClass(document.body, 'dark');
    this.renderer.addClass(document.body, 'light');
  }
}

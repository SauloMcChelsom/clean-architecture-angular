import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SlideToggleComponent } from 'src/app/ui/components/slide-toggle/slide-toggle.component';

@Component({
  selector: 'app-slide-toggle-showcase',
  templateUrl: './slide-toggle-showcase.component.html',
  styleUrls: ['./slide-toggle-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SlideToggleComponent,
    MatButtonModule
  ]
})
export class SlideToggleShowcaseComponent {
  codes = [
    `
    import { SlideToggleComponent } from 'src/app/ui/components/slide-toggle/slide-toggle.component';
    `,
    `
    <SlideToggle 
      [formControl]="config.formControl"
      label="Ativar recurso"
      color="accent"
      (toggleChange)="onToggleChange($event)">
    </SlideToggle>
    `,
    `
    config = {
      formControl:  new FormControl(true, Validators.requiredTrue)
    }

    onToggleChange(value: boolean) {
      console.log('Toggle State:', value);
    }
    `,
    `
    
    `,
  ];
  config = {
    formControl:  new FormControl(true, Validators.requiredTrue)
  }

  onToggleChange(value: boolean) {
    console.log('Toggle State:', value);
  }

  @ViewChild(SlideToggleComponent) component!: SlideToggleComponent;
  
  reset(){
    this.component.resetToInitialState()
  }

  disable(){
    this.component.disable()
  }
  enable(){
    this.component.enable()
  }
}

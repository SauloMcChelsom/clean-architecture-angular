import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RadioComponent } from 'src/app/ui/components/radio/radio.component';

@Component({
  selector: 'app-radio-input-showcase',
  templateUrl: './radio-input-showcase.component.html',
  styleUrls: ['./radio-input-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RadioComponent
  ]
})
export class RadioInputShowcaseComponent {

  config = {
    formControl: new FormControl<string | undefined>(""),
    options: [
      {label: 'Pagamento por PIX', cod:'pix'}, 
      {label: 'Pagamento por cartao de credito', cod:'card' }
    ],
    initialSelection: 'pix',
  };

  @ViewChild(RadioComponent) InputComponent!: RadioComponent;


  reset(){
    this.InputComponent.resetToInitialState()
  }

  disable(){
    this.InputComponent.disable()
  }

  enable(){
    this.InputComponent.enable()
  }

  onSelect($event:string){
    console.log($event)
  }

}

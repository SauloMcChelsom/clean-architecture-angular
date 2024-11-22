import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RadioComponent } from 'src/app/ui/components/radio/radio.component';

@Component({
  selector: 'app-radio-input-showcase',
  templateUrl: './radio-input-showcase.component.html',
  styleUrls: ['./radio-input-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RadioComponent,
    MatButtonModule
  ]
})
export class RadioInputShowcaseComponent {
  codes = [
    `
    import { RadioComponent } from 'src/app/ui/components/radio/radio.component';
    `,
    `
    <Radio
      [formControl]="config.formControl" 
      [options]="config.options" 
      [initialSelection]="config.initialSelection"
      (onSelect)="onSelect($event)"
      [isRequired]="true"
    ></Radio>
    `,
    `
    config = {
      formControl: new FormControl<string | undefined>(""),
      options: [
        {label: 'Pagamento por PIX', cod:'pix', disabled: false}, 
        {label: 'Pagamento por cartao de credito', cod:'card', disabled: false },
        {label: 'Pagamento por cartao de debito', cod:'debit', disabled: false }
      ],
      initialSelection: 'pix',
    };

    onSelect($event:string){
      console.log($event)
    }
    `
  ];
  config = {
    formControl: new FormControl<string | undefined>(""),
    options: [
      {label: 'Pagamento por PIX', cod:'pix', disabled: false}, 
      {label: 'Pagamento por cartao de credito', cod:'card', disabled: false },
      {label: 'Pagamento por cartao de debito', cod:'debit', disabled: false }
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

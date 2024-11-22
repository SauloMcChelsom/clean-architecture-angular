import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimaryColorDirective } from 'src/app/ui/directives/primary-color.directive';

@Component({
  selector: 'app-text-showcase',
  templateUrl: './text-showcase.component.html',
  styleUrls: ['./text-showcase.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    PrimaryColorDirective
  ]
})
export class TextShowcaseComponent implements OnInit {
  codes = [
    `
    import { PrimaryColorDirective } from 'src/app/ui/directives/primary-color.directive';
    `,
    `
      <div appPrimaryColor class="text-small flex justify-content-start">
          Texto simples para exemplificar
      </div>
      <div class="text-small flex justify-content-start">
          Texto simples para exemplificar
      </div>

      <div class="text-default  flex justify-content-start">
          Texto simples para exemplificar
      </div>

      <div class="text-medium flex justify-content-start">
          Texto simples para exemplificar
      </div>
    `,
    `
    text-small 
    text-default 
    text-medium 
    text-large 
    text-large-big
    text-large-huge
    `
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

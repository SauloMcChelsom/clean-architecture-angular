import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonFlatComponent } from 'src/app/ui/components/button-flat/button-flat.component';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';

@Component({
  selector: 'app-button-flat-showcase',
  templateUrl: './button-flat-showcase.component.html',
  styleUrls: ['./button-flat-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    ButtonFlatComponent
  ]
})
export class ButtonFlatShowcaseComponent implements OnInit {
  codes = [
    `
    import { ButtonFlatComponent } from 'src/app/ui/components/button-flat/button-flat.component';
    `,
    `
    <ButtonFlat color="primary">
      <div class="flex flex-row flex-wrap align-items-center">
        <Icon fontIcon="home"></Icon>
        <div class="text-medium">
          Texto simples para exemplificar
      </div>  </div>
    </ButtonFlat>
    `,
    `
    <button mat-flat-button>
      Texto simples para exemplificar
    </button>
    `,
  ]
  constructor() { }

  ngOnInit() {
  }

}

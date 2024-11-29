import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonBasicComponent } from 'src/app/ui/components/button-basic/button-basic.component';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';

@Component({
  selector: 'app-button-basic-showcase',
  templateUrl: './button-basic-showcase.component.html',
  styleUrls: ['./button-basic-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    ButtonBasicComponent,
  ]
})
export class ButtonBasicShowcaseComponent implements OnInit {
  codes = [
    `
    import { ButtonBasicComponent } from 'src/app/ui/components/button-basic/button-basic.component';
    import { IconComponent } from 'src/app/ui/components/icon/icon.component';
    `,
    `
    <ButtonBasic color="primary">
      <div class="flex flex-row flex-wrap align-items-center">
        <Icon fontIcon="home"></Icon>
        <div class="text-medium">
          Texto simples para exemplificar
        </div>  
      </div>
    </ButtonBasic>
    `,
    `
    <button mat-button>Texto simples para exemplificar</button>
    `
  ]
  constructor() { }

  ngOnInit() {
  }

}

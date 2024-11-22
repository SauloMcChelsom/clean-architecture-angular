import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonRaisedComponent } from 'src/app/ui/components/button-raised/button-raised.component';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';

@Component({
  selector: 'app-button-raised-showcase',
  templateUrl: './button-raised-showcase.component.html',
  styleUrls: ['./button-raised-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    ButtonRaisedComponent
  ]
})
export class ButtonRaisedShowcaseComponent implements OnInit {
  codes = [
    `
    import { ButtonRaisedComponent } from 'src/app/ui/components/button-raised/button-raised.component';
    `,
    `
    <ButtonRaised color="primary">
      <div class="flex flex-row flex-wrap align-items-center">
        <Icon fontIcon="home"></Icon>
        <div class="text-medium">
          Texto simples para exemplificar
        </div>  
      </div>
    </ButtonRaised>
    `,
    `
    <button mat-raised-button>
      Texto simples para exemplificar
    </button>
    `,
  ]
  constructor() { }

  ngOnInit() {
  }

}

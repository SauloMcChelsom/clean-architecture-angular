import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonStrokedComponent } from 'src/app/ui/components/button-stroked/button-stroked.component';
import { IconComponent } from 'src/app/ui/components/icon/icon.component';

@Component({
  selector: 'app-button-stroked-showcase',
  templateUrl: './button-stroked-showcase.component.html',
  styleUrls: ['./button-stroked-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    ButtonStrokedComponent
  ]
})
export class ButtonStrokedShowcaseComponent implements OnInit {
  codes = [
    `
    import { ButtonStrokedComponent } from 'src/app/ui/components/button-stroked/button-stroked.component';
    `,
    `
    <ButtonStroked color="primary">
      <div class="flex flex-row flex-wrap align-items-center">
        <Icon fontIcon="home"></Icon>
        <div class="text-medium">
          Texto simples para exemplificar
        </div>
      </div>
    </ButtonStroked>
    `,
    `
    <button mat-stroked-button>
      Texto simples para exemplificar
    </button>
    `,
  ]
  constructor() { }

  ngOnInit() {
  }

}

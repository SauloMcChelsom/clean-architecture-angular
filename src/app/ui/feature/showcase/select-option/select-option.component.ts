import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateService } from '@ngx-translate/core';
import { SelectOptionComponent } from 'src/app/ui/components/select-option/select-option.component';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    SelectOptionComponent
  ]
})
export class SelectOptionShowcaseComponent {
  panelOpenState = false;

  config = {
    formControl: new FormControl(''),
    selectEmpy: this.translate.instant('NOTE.OPTION_EMPY'),
    selections: [
      { description: 'Portuguese (Brazil)', cod: 'pt-BR' },
      { description: 'English (United States)', cod: 'en-US' },
      { description: 'Spanish (Colombia)', cod: 'es-CO' },
    ]
  };

  constructor(private translate: TranslateService) { }
}

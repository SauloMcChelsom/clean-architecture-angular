import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateService } from '@ngx-translate/core';
import { SelectOptionComponent } from 'src/app/ui/components/select-option/select-option.component';

@Component({
  selector: 'app-select-option-showcase',
  templateUrl: './select-option-showcase.component.html',
  styleUrls: ['./select-option-showcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    SelectOptionComponent
  ]
})
export class SelectOptionShowcaseComponent {
  panelOpenState = false;

  formControl = new FormControl('');
  selectEmpy = this.translate.instant('NOTE.OPTION_EMPY');
  requiredField = false;
  disableField = false;
  selections = [
    { description: 'Portuguese (Brazil)', cod: 'pt-BR' },
    { description: 'English (United States)', cod: 'en-US' },
    { description: 'Spanish (Colombia)', cod: 'es-CO' },
  ];

  @ViewChild(SelectOptionComponent) selectOptionComponent!: SelectOptionComponent;
  
  constructor(private translate: TranslateService) {}

}

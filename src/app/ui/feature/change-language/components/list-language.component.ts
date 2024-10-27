import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectOptionComponent } from 'src/app/ui/components/select-option/select-option.component';
import { TranslationService } from '../../internationalization/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { SelectionModel } from 'src/app/ui/components/select-option/models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ListLanguage',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SelectOptionComponent
  ]
})
export class ListLanguageComponent {
  formControl = new FormControl('');
  selectEmpy =  this.translate.instant('NOTE.OPTION_EMPY');
  default = this.translationService.getDefaultLang();
  selections: SelectionModel[] = [
    { description: 'Portuguese (Brazil)', cod: 'pt-BR' },
    { description: 'English (United States)', cod: 'en-US' },
    { description: 'Spanish (Colombia)', cod: 'es-CO' },
  ];

  constructor(
    private translationService:TranslationService, 
    private translate: TranslateService
  ){
    this.formControl.setValue(this.default)
  }

  selected($event:string){
    this.translationService.changeLang($event);
  }
}

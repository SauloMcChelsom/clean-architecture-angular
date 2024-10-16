import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectionModel, SelectOptionComponent } from 'src/app/ui/components/select-option/select-option.component';
import { TranslationService } from '../../internationalization/translation.service';
import { TranslateService } from '@ngx-translate/core';

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
  selectEmpy =  this.translate.instant('NOTE.OPTION_EMPY');
  default = this.translationService.getDefaultLang();
  selections: SelectionModel[] = [
    { description: 'Portuguese (Brazil)', cod: 'pt-BR' },
    { description: 'English (United States)', cod: 'en-US' },
    { description: 'Spanish (Colombia)', cod: 'es-CO' },
  ];

  constructor(private translationService:TranslationService, private translate: TranslateService){}

  selected($event:string){
    this.translationService.changeLang($event);
  }
}

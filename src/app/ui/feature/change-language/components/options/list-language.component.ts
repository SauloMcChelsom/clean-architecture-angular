import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectOptionComponent } from 'src/app/ui/components/select-option/select-option.component';
import { TranslationService } from '../../../internationalization/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { SelectionModel } from 'src/app/ui/components/select-option/models';
import { FormControl } from '@angular/forms';
import { LanguageRepository } from 'src/app/domain/repositories/language_repository';

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
  selections: SelectionModel[] = [];

  constructor(
    private translationService:TranslationService, 
    private translate: TranslateService,
    private lang: LanguageRepository
  ){
    this.formControl.setValue(this.default);
    this.lang.getAllLanguage().subscribe((res)=>{
      res.forEach((value)=>{
        this.selections.push({
          description: value.language,
          cod: value.prefix
        })
      })
    })
  }

  selected($event:string){
    this.translationService.changeLang($event);
  }
}

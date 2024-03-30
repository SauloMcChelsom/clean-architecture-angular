import { TranslationService } from './translation.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: any, args?: any): any {
    console.log(value);
    return this.translationService.translate(value);
  }
}

import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translates: TranslateService) {
    this.translates.setDefaultLang('en-US');
    this.translates.use('en-US');

    console.log('sssssss');
  }

  translate(url: string) {
    let s = 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk';
    this.translates.get(url).subscribe(r => {
      s = r;
      console.log(s);
    });

    this.translates.instant(url);
    return s;
  }
}

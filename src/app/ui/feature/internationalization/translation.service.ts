import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';
import { LanguageRepository } from 'src/app/domain/repositories/language_repository';
import { DEFAULT_LANG } from 'src/config/constant';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    defaultLang = DEFAULT_LANG;

    constructor(
        private translateService: TranslateService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private lang: LanguageRepository
    ) {
        if (isPlatformBrowser(this.platformId)) {
            this.lang.getLanguage().pipe(
                tap((savedLang)=>{
                    if (savedLang) {
                        this.defaultLang = savedLang.prefix;
                    }
                    this.translateService.setDefaultLang(this.defaultLang);
                    this.translateService.use(this.defaultLang);
                })
            ).subscribe({})
        }
    }

    changeLang(lang: string) {
        this.translateService.use(lang);
        if (isPlatformBrowser(this.platformId)) {
            this.lang.addLanguage(lang).subscribe({})
        }
    }

    getDefaultLang(): string {
        const language$ = this.lang.getLanguage();
  
        let defaultLang = '';
        language$.subscribe(lang => defaultLang = lang.prefix).unsubscribe();
        return defaultLang;
    }
}
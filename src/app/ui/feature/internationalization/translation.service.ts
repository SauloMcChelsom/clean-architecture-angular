import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANG } from 'src/config/constant';

@Injectable({
    providedIn: 'root'
})

export class TranslationService {
    defaultLang = DEFAULT_LANG;

    constructor(
        private translateService: TranslateService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        if (isPlatformBrowser(this.platformId)) {
            const savedLang = localStorage.getItem('lng');
            if (savedLang) {
                this.defaultLang = savedLang;
            }
            this.translateService.setDefaultLang(this.defaultLang);
            this.translateService.use(this.defaultLang);
        }
    }

    changeLang(lang: string) {
        this.translateService.use(lang);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('lng', lang);
        }
    }

    getDefaultLang(): string {
        return localStorage.getItem('lng') ?? this.defaultLang;
    }
}
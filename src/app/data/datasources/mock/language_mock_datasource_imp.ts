import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LanguageEntity } from 'src/app/domain/entities/language_entity';
import { LanguageDatasource } from '../datasource';

@Injectable({ providedIn: 'root' })
export class LanguageMockDatasourceImp implements LanguageDatasource {

    private _lang$!: BehaviorSubject<LanguageEntity[]>;
    private _favorite$!: BehaviorSubject<LanguageEntity>;

    private lang: LanguageEntity[] = [
        { language: 'Português (Brasil)', prefix: 'pt-BR' },
        { language: 'Inglês (Estados Unidos)', prefix: 'en-US' },
        { language: 'Espanhol (Colômbia)', prefix: 'es-CO' }
    ];

    constructor() {
        this._favorite$ = new BehaviorSubject({ language: 'Inglês (Estados Unidos)', prefix: 'en-US' });
        this._lang$ = new BehaviorSubject(this.lang);
    }

    public getAllLanguage(): Observable<LanguageEntity[]> {
        return this._lang$.asObservable();
    }

    public getLanguage(): Observable<LanguageEntity> {
        return this._favorite$.asObservable();
    }

    public addLanguage(prefix: string): Observable<LanguageEntity> {
        const lang = this.lang.find(r => r.prefix == prefix);
        this._favorite$.next(lang!);
        return this._favorite$.asObservable();
    }
}
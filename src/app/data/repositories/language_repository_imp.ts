import { Injectable } from "@angular/core";
import { catchError, combineLatest, map, Observable, take, throwError } from "rxjs";
import { LanguageEntity } from "src/app/domain/entities/language_entity";
import { LanguageRepository } from "src/app/domain/repositories/language_repository";
import { StoreRepository } from "src/app/infra/store/store_repository";
import { LanguageMockDatasourceImp } from "../datasources/mock/language_mock_datasource_imp";
import { LanguageDatasource } from "../datasources/datasource";
import { LanguageCache } from "../cache/cache";

@Injectable({ providedIn: 'root' })
export class LanguageRepositoryImp implements LanguageRepository {

    constructor(
        private datasource: LanguageDatasource,
        private cache: LanguageCache
    ) { }

    public getAllLanguage(): Observable<LanguageEntity[]> {
        return this.datasource.getAllLanguage().pipe(map(r => r));
    }

    public getLanguage(): Observable<LanguageEntity> {
        return combineLatest({
            getLanguageCache: this.cache.results(),
            getLanguageDatasource: this.datasource.getLanguage()
        }).pipe(
            take(3),
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => {
                if (show.getLanguageCache[0]?.prefix) {
                    this.datasource.addLanguage(show.getLanguageCache[0].prefix).pipe(take(3)).subscribe({})
                }
                return show.getLanguageDatasource
            })
        );
    }

    public addLanguage(prefix: string): Observable<LanguageEntity> {
        return combineLatest({
            deleteLanguageCache: this.cache.delete(),
            getLanguageCache: this.cache.save({ language: '', prefix: prefix }),
            getLanguageDatasource: this.datasource.addLanguage(prefix)
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => {
                return show.getLanguageDatasource
            })
        );
    }
}
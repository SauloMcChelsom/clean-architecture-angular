import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LanguageEntity } from "src/app/domain/entities/language_entity";
import { LanguageRepository } from "src/app/domain/repositories/language_repository";
import { AddLanguageUseCase } from "../language_usecase";

@Injectable({ providedIn: 'root' })
export class AddLanguageUseCaseImp implements AddLanguageUseCase {

    constructor(private _lang: LanguageRepository) { }

    public addLanguage(lang: string): Observable<LanguageEntity> {
        return this._lang.addLanguage(lang);
    }
}
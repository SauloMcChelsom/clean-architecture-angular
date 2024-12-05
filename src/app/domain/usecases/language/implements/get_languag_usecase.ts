import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LanguageEntity } from "src/app/domain/entities/language_entity";
import { LanguageRepository } from "src/app/domain/repositories/language_repository";
import { GetLanguagUseCase } from "../language_usecase";

@Injectable({ providedIn: 'root' })
export class GetLanguagUseCaseeImp implements GetLanguagUseCase {

    constructor(private _lang: LanguageRepository) { }
    public getLanguage(): Observable<LanguageEntity> {
        return this._lang.getLanguage();
    }
}
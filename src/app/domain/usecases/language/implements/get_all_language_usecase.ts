import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LanguageEntity } from "src/app/domain/entities/language_entity";
import { LanguageRepository } from "src/app/domain/repositories/language_repository";
import { GetAllLanguageUseCase } from "../language_usecase";

@Injectable({ providedIn: 'root' })
export class GetAllLanguageUseCaseImp implements GetAllLanguageUseCase {

    constructor(private _lang: LanguageRepository) { }

    public getAllLanguage(): Observable<LanguageEntity[]> {
        return this._lang.getAllLanguage();
    }
}
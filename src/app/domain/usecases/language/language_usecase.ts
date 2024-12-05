import { Observable } from "rxjs";
import { LanguageEntity } from "../../entities/language_entity";


export abstract class GetAllLanguageUseCase {
    abstract getAllLanguage(): Observable<LanguageEntity[]>;
}

export abstract class GetLanguagUseCase {
    abstract getLanguage(): Observable<LanguageEntity>;
}

export abstract class AddLanguageUseCase {
    abstract addLanguage(lang: string): Observable<LanguageEntity>;
}
import { Observable } from "rxjs";
import { LanguageEntity } from "../entities/language_entity";

export abstract class LanguageRepository {
    abstract getAllLanguage(): Observable<LanguageEntity[]>;
    abstract getLanguage(): Observable<LanguageEntity>;
    abstract addLanguage(prefix: string): Observable<LanguageEntity>;
}
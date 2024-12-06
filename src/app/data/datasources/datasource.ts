import { AuthenticationRepository } from "src/app/domain/repositories/authentication_repository";
import { LanguageRepository } from "src/app/domain/repositories/language_repository";

export abstract class AuthenticationDatasource extends AuthenticationRepository {}
export abstract class LanguageDatasource extends LanguageRepository {}

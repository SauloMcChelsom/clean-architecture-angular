import { LanguageEntity } from "src/app/domain/entities/language_entity";
import { StoreRepository } from "src/app/infra/store/store_repository";

export abstract class LanguageCache extends StoreRepository<LanguageEntity> {}

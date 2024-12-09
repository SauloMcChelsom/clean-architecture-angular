import { AuthorizationEntity } from "src/app/domain/entities/authorization_entity";
import { LanguageEntity } from "src/app/domain/entities/language_entity";
import { UserEntity } from "src/app/domain/entities/user.entity";
import { StoreRepository } from "src/app/infra/store/store_repository";

export abstract class LanguageCache extends StoreRepository<LanguageEntity> {}
export abstract class TokenCache extends StoreRepository<AuthorizationEntity> {}
export abstract class UserDatabaseCache extends StoreRepository<UserEntity> {}
export abstract class UserCache extends StoreRepository<UserEntity> {}

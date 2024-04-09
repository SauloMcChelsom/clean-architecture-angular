import { StoreRepository } from "src/app/infra/store/store_repository";

export abstract class UserRepository<T> extends StoreRepository<T> {}
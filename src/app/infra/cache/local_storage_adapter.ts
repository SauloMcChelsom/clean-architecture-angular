export abstract class ILocalStorageAdapter<T> {
    abstract fetch(key: string): Promise<T>;
    abstract delete(key: string): Promise<boolean>;
    abstract save(key: string, value: T): Promise<boolean>;
}
import { ILocalStorageAdapter } from "./local_storage_adapter";

export class LocalStorageAdapterImp implements ILocalStorageAdapter<any> {

    async save(key: string, value: any): Promise<boolean> {
        await localStorage.removeItem(key);
        await localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    async delete(key: string): Promise<boolean> {
        await localStorage.removeItem(key);
        return true;
    }

    async fetch(key: string): Promise<any> {
        return await JSON.parse(localStorage.getItem(key)!);
    }
}
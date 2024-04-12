import { StorageAdapter } from "../storage_adapter";

export class StorageAdapterImp implements StorageAdapter<any> {

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
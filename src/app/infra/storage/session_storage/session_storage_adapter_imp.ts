import { StorageAdapter } from "../storage_adapter";

export class SessionAdapterImp implements StorageAdapter<any> {

    async save(key: string, value: any): Promise<boolean> {
        await sessionStorage.removeItem(key);
        await sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    async delete(key: string): Promise<boolean> {
        await sessionStorage.removeItem(key);
        return true;
    }

    async fetch(key: string): Promise<any> {
        return await JSON.parse(sessionStorage.getItem(key)!);
    }
}
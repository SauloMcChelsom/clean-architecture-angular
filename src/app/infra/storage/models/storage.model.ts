export enum  StorageStrategy {
    LOCAL_STORAGE = "LOCAL_STORAGE",
    SESSION_STORAGE = "SESSION_STORAGE"
}

export interface StorageModel {
    tableName: string, 
    stateKey: string, 
    storageStrategy: StorageStrategy,
    encryptionKey?: string,
    ttl?: number    
}
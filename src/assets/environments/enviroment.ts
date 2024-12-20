import { Port, Protocol, preview, version } from "src/app/infra/http/model/url.model";
import { StorageStrategy } from "src/app/infra/storage/models/storage.model";

export const environment = {
  production: false,
  domain: 'localhost',
  protocol: Protocol.HTTP,
  version: version.v1,
  preview: preview.private,
  port: Port._3000,

  payloadStorage: {
    user:{
      encryptionKey: '',//'5a203b97-53d6-406a-9909-89883e217abb',
      tableName: 'user',
      stateKey: '0242ac120003',
      storageStrategy: StorageStrategy.LOCAL_STORAGE
    },
    userDatabase:{
      encryptionKey: '',//'5a203b97-53d6-406a-9909-89883e217abb',
      tableName: 'user-database',
      stateKey: '0242ac120003',
      storageStrategy: StorageStrategy.LOCAL_STORAGE
    },
    language:{
      encryptionKey: '',//'5a203b97-53d6-406a-9909-89883e217abb',
      tableName: 'language',
      stateKey: '0242ac120003',
      storageStrategy: StorageStrategy.LOCAL_STORAGE
    },
    authorization:{
      encryptionKey: '',//'5a203b97-53d6-406a-9909-89883e217abb',
      tableName: 'authorization',
      stateKey: '0242ac120003',
      storageStrategy: StorageStrategy.LOCAL_STORAGE
    }
  }
}

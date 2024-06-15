import { Port, Protocol, preview, version } from "src/app/infra/http/model/url.model";
import { StorageStrategy } from "src/app/infra/storage/models/storage.model";

export const environment = {
  production: false,
  Domain: 'localhost',
  Protocol: Protocol.HTTP,
  version: version.v1,
  preview: preview.private,
  Port: Port._3000,

  payloadStorage: {
    user:{
      encryptionKey: '',//'5a203b97-53d6-406a-9909-89883e217abb',
      tableName: 'c3e79ae0b160',
      stateKey: '0242ac120003',
      storageStrategy: StorageStrategy.LOCAL_STORAGE
    }
  }
}

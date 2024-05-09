import { Inject, Injectable, Optional } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap } from 'rxjs';
import { CryptoAdapterImp } from 'src/app/infra/crypto/implements/CryptoJS/cryptojs_adapter_imp';
import { StorageAdapterImp } from 'src/app/infra/storage/local_storage/local_storage_adapter_imp';
import { StorageStrategy } from 'src/app/infra/storage/models/storage.model';
import { SessionAdapterImp } from 'src/app/infra/storage/session_storage/session_storage_adapter_imp';
import { StorageAdapter } from 'src/app/infra/storage/storage_adapter';
import { AppState } from '../../model/app-state.model';
import { StoreAdapter } from '../../store_adapter';

@Injectable({
  providedIn: 'root'
})
export class NgRxAdapterImp<T> extends ComponentStore<any> implements StoreAdapter<T> {

  private storage: StorageAdapter<T> = new StorageAdapterImp()
  private session: StorageAdapter<T> = new SessionAdapterImp()

  constructor(
    @Optional() @Inject('') public initialStates: T,
  ) {
    super(initialStates);
  }

  public initialState(initialState: T): void { }

  public results = () => {
    this.decrypt();

    return this.select((state: any) => state.items);
  }

  public save = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();

    this.encrypt();
  };

  public update = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();

    this.encrypt()
  };

  public deletById = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();

    this.encrypt()
  };

  public delete = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();

    this.state$.subscribe((values: any) => {
      const value: AppState<any> = values;
      this.deleteStorageStrategy(value.storage.storageStrategy, value.storage.tableName)
    }).unsubscribe()
  };

  private encrypt() {
    this.state$.subscribe((values: any) => {
      const value: AppState<any> = values;
      if (!["", null, undefined].includes(value.storage?.encryptionKey)) {
        new CryptoAdapterImp().encrypt(value.items, value.storage.encryptionKey!).subscribe((valuesEncrypt: string) => {
          this.saveStorageStrategy(value.storage.tableName, valuesEncrypt, value.storage.storageStrategy)
        })
        return;
      }

      this.saveStorageStrategy(value.storage.tableName, values, value.storage.storageStrategy)
    })
  }

  private decrypt(): any {
    let initialProperty = this.state() as AppState<any>;

    if (!initialProperty.storage.tableName) {
      return;
    }

    this.findStorageStrategy(initialProperty.storage.storageStrategy, initialProperty.storage.tableName).then((result) => {
      if (!result) {
        return;
      }

      if (!["", null, undefined].includes(initialProperty.storage?.encryptionKey)) {
        new CryptoAdapterImp().decrypt(result as any, initialProperty.storage.encryptionKey!).pipe(
          tap(((valuesDecryptt) => {
            initialProperty.items = valuesDecryptt,
              this.setState(initialProperty);
          }))
        )
          .subscribe()
          .unsubscribe()

        return;
      }

      this.setState(result)
    });
  }

  private saveStorageStrategy(tableName: string, items: any, strategy: StorageStrategy) {

    if (strategy == StorageStrategy.LOCAL_STORAGE) {
      this.storage.delete(tableName);
      this.storage.save(tableName, items);
    }

    if (strategy == StorageStrategy.SESSION_STORAGE) {
      this.session.delete(tableName);
      this.session.save(tableName, items);
    }
  }

  private async findStorageStrategy(strategy: StorageStrategy, tableName: string) {

    if (strategy == StorageStrategy.LOCAL_STORAGE) {
      return this.storage.fetch(tableName)
    }

    if (strategy == StorageStrategy.SESSION_STORAGE) {
      return this.session.fetch(tableName)
    }

    return new Promise((resolve, reject) => {
      reject();
    });
  }

  private deleteStorageStrategy(strategy: StorageStrategy, tableName: string) {

    if (strategy == StorageStrategy.LOCAL_STORAGE) {
      this.storage.delete(tableName)
    }

    if (strategy == StorageStrategy.SESSION_STORAGE) {
      this.session.delete(tableName)
    }
  }
}
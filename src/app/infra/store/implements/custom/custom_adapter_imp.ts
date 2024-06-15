import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { CryptoAdapterImp } from 'src/app/infra/crypto/implements/CryptoJS/cryptojs_adapter_imp';
import { StorageStrategy } from 'src/app/infra/storage/models/storage.model';
import { StorageAdapter } from 'src/app/infra/storage/storage_adapter';
import { AppState, LoadingState } from '../../model/app-state.model';
import { StoreAdapter } from '../../store_adapter';

@Injectable()
export class CustomAdapterImp<T> implements StoreAdapter<T> {

  private state$!: BehaviorSubject<T>;
  private initialStateProperty!: AppState<any>;

  constructor(
    @Inject("STOREGE") private storage: StorageAdapter<T>,
    @Inject("SESSION") private session: StorageAdapter<T>
  ) { }

  initialState(initialState: T): void {
    this.initialStateProperty = initialState as any;
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  results<R>(selector: (state: T) => R): Observable<R> {
    this.decrypt()
    return this.state$.asObservable().pipe(
      map(selector),
    );
  }

  save(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.encrypt();
    this.state$.next(updatedState);
  }

  delete(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);

    this.state$.subscribe((values: any) => {
      const value: AppState<any> = values;
      this.deleteStorageStrategy(value.storage.storageStrategy, value.storage.tableName)
    })

    this.state$.next(updatedState);
  }

  deletById(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.encrypt()
    this.state$.next(updatedState);
  }

  update(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.encrypt()
    this.state$.next(updatedState);
  }

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
    const initialProperty: AppState<any> = this.initialStateProperty;

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
              this.state$.next(initialProperty as any);
          }))
        )
        .subscribe()
        .unsubscribe()
        
        return;
      }

      this.state$.next(result as any);
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

  private findStorageStrategy(strategy: StorageStrategy, tableName: string) {

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

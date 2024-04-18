import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { StoreAdapter } from '../../store_adapter';
import { CryptoAdapterImp } from 'src/app/infra/crypto/implements/CryptoJS/cryptojs_adapter_imp';
import { AppState } from '../../model/app-state.model';
import { StorageAdapter } from 'src/app/infra/storage/storage_adapter';

@Injectable()
export class CustomAdapterImp<T> implements StoreAdapter<T> {

  private state$!: BehaviorSubject<T>;

  constructor(private storage: StorageAdapter<T>) {}

  init(initialState: T): void {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  select<R>(selector: (state: T) => R): Observable<R> {
    return this.state$.asObservable().pipe(
      map(selector)
    );
  }

  save(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    console.log(updatedState)
    
    this.state$.subscribe((v:any)=>{
      console.log(v.items, v.storage.encryptionKey, v.storage.tableName)
      const en = new CryptoAdapterImp().encrypt(v.items, v.storage.encryptionKey!)
      en.subscribe((v2:string)=>{
        console.log(v2)
        this.storage.delete(v.storage.tableName)
        this.storage.save(v.storage.tableName, v2)
      })

    })
    
    this.state$.next(updatedState);
  }

  delete(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.state$.next(updatedState);
  }

  deletById(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.state$.next(updatedState);
  }
  
  update(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.state$.next(updatedState);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { AppState, LoadingState } from 'src/app/infra/store/model/app-state.model';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { environment } from 'src/assets/environments/enviroment';

interface AppStateUser extends AppState<UserEntity> { }

@Injectable()
export class UserCacheCustomeImp implements StoreRepository<UserEntity> {

  constructor(private store: StoreAdapter<AppStateUser>) {
    this.store.initialState({
      items: [],
      callState: LoadingState.INIT,
      storage: {
        encryptionKey: environment.payloadStorage.user.encryptionKey,
        tableName: environment.payloadStorage.user.tableName,
        storageStrategy: environment.payloadStorage.user.storageStrategy
      }
    })
  }

  public results(): Observable<UserEntity[]> {
    return this.store.results((state: AppStateUser) => state.items as any);
  }

  public save(content: UserEntity): Observable<boolean> {
    this.store.save((state: AppStateUser) => ({ ...state, items: [...state.items, content] }));
    return of(true);
  }

  public update(content: UserEntity): Observable<boolean> {
    this.store.update((state: AppStateUser) => ({ ...state, items: state.items.map(item => (item.uid === content.uid ? content : item)) }));
    return of(true);
  }

  public deletById(uid: string): Observable<boolean> {
    this.store.save((state: AppStateUser) => ({ ...state, items: state.items.filter(item => item.uid !== uid) }));
    return of(true);
  }

  public delete(): Observable<boolean> {
    this.store.delete((state: AppStateUser) => ({ ...state, items: state.items = [] }));
    return of(true);
  }
}
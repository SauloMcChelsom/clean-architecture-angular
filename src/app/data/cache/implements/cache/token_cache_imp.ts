import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { NgRxAdapterImp } from 'src/app/infra/store/implements/NgRx/ngrx_adapter_imp';
import { AppState, LoadingState } from 'src/app/infra/store/model/app-state.model';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { environment } from 'src/assets/environments/enviroment';

interface AppStateUser extends AppState<AuthorizationEntity> { }

@Injectable()
export class TokenCacheImp implements StoreRepository<AuthorizationEntity> {

  constructor(private store: StoreAdapter<AppStateUser>) {
    this.store = new NgRxAdapterImp<AppStateUser>({
      items: [],
      callState: LoadingState.INIT,
      storage: {
        encryptionKey: environment.payloadStorage.authorization.encryptionKey,
        tableName: environment.payloadStorage.authorization.tableName,
        storageStrategy: environment.payloadStorage.authorization.storageStrategy
      }
    })
  }

  public results(): Observable<AuthorizationEntity[]> {
    return this.store.results((state: AppStateUser) => state.items as any);
  }

  public save(content: AuthorizationEntity): Observable<boolean> {
    this.store.save((state: AppStateUser) => ({ ...state, items: [...state.items, content] }));
    return of(true);
  }

  public update(content: AuthorizationEntity): Observable<boolean> {
    this.store.update((state: AppStateUser) => ({ ...state, items: state.items.map(item => (item.access_token === content.access_token ? content : item)) }));
    return of(true);
  }

  public deletById(access_token: string): Observable<boolean> {
    this.store.deletById((state: AppStateUser) => ({ ...state, items: state.items.filter(item => item.access_token !== access_token) }));
    return of(true);
  }

  public delete(): Observable<boolean> {
    this.store.delete((state: AppStateUser) => ({ ...state, items: state.items = [] }));
    return of(true);
  }
}
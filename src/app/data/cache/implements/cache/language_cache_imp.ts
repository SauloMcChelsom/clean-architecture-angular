import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LanguageEntity } from 'src/app/domain/entities/language_entity';
import { NgRxAdapterImp } from 'src/app/infra/store/implements/NgRx/ngrx_adapter_imp';
import { AppState, LoadingState } from 'src/app/infra/store/model/app-state.model';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { environment } from 'src/assets/environments/enviroment';

interface AppStateUser extends AppState<LanguageEntity> { }

@Injectable()
export class CurrentSystemLanguageCacheImp implements StoreRepository<LanguageEntity> {

  constructor(private store: StoreAdapter<AppStateUser>) {
    this.store = new NgRxAdapterImp<AppStateUser>({
      items: [],
      callState: LoadingState.INIT,
      storage: {
        encryptionKey: environment.payloadStorage.systemLanguage.encryptionKey,
        tableName: environment.payloadStorage.systemLanguage.tableName,
        storageStrategy: environment.payloadStorage.systemLanguage.storageStrategy
      }
    })
  }

  public results(): Observable<LanguageEntity[]> {
    return this.store.results((state: AppStateUser) => state.items as any);
  }

  public save(content: LanguageEntity): Observable<boolean> {
    this.store.save((state: AppStateUser) => ({ ...state, items: [...state.items, content] }));
    return of(true);
  }

  public update(content: LanguageEntity): Observable<boolean> {
    this.store.update((state: AppStateUser) => ({ ...state, items: state.items.map(item => (item.prefix === content.prefix ? content : item)) }));
    return of(true);
  }

  public deletById(prefix: string): Observable<boolean> {
    this.store.deletById((state: AppStateUser) => ({ ...state, items: state.items.filter(item => item.prefix !== prefix) }));
    return of(true);
  }

  public delete(): Observable<boolean> {
    this.store.delete((state: AppStateUser) => ({ ...state, items: state.items = [] }));
    return of(true);
  }
}
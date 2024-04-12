import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { CustomAdapterImp } from 'src/app/infra/store/implements/custom/custom_adapter_imp';
import { AppState, LoadingState } from 'src/app/infra/store/model/app-state.model';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { environment } from 'src/assets/environments/enviroment';

interface AppStateUser extends AppState<UserEntity> { }

@Injectable()
export class UserCacheDatasourceImp implements StoreRepository<UserEntity> {

  public store = new CustomAdapterImp<AppStateUser>({
    items: [],
    callState: LoadingState.INIT,
    storage: {
      encryptionKey: environment.payloadStorage.user.encryptionKey,
      tableName: environment.payloadStorage.user.tableName,
      stateKey: environment.payloadStorage.user.stateKey,
      storageStrategy: environment.payloadStorage.user.storageStrategy,
      ttl: environment.payloadStorage.user.ttl || 1209600,
    }
  });

  public select(): Observable<UserEntity[]> {
    return this.store.select(state => state.items);
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
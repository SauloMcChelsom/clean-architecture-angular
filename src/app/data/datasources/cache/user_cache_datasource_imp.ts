import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { CustomAdapterImp } from 'src/app/infra/store/implements/custom/custom_adapter_imp';
import { UserRepository } from '../../models/user.model';
import { StoreRepository } from 'src/app/infra/store/store_repository';


export const enum LoadingState {
  INIT = "INIT",
  LOADING = "LOADING",
  LOADED = "LOADED"
}

export interface ErrorState {
  errorMsg: string;
}

export type CallState = LoadingState | ErrorState;

export interface AppState {
  user: UserEntity[];
  callState: CallState;
}

function getError(callState: CallState): LoadingState | string | null {
  if ((callState as ErrorState).errorMsg !== undefined) {
    return (callState as ErrorState).errorMsg;
  }

  return null;
}

@Injectable()
export class UserCacheDatasourceImp implements StoreRepository<UserEntity> {

   public store = new CustomAdapterImp<AppState>({
     user: [],
     callState: LoadingState.INIT
   });

  /*constructor(private store: CustomAdapterImp<AppState>) {
    this.store.initialState = {
      user: [],
      callState: LoadingState.INIT
    }
  }*/

  public select(): Observable<UserEntity[]> {
    return this.store.select(state => state.user);
  }

  public save(content: UserEntity): Observable<boolean> {
    this.store.save((state: AppState) => ({ ...state, user: [...state.user, content] }));
    return of(true);
  }

  public update(content: UserEntity): Observable<boolean> {
    this.store.update((state: AppState) => ({ ...state, user: [...state.user, content] }));
    return of(true);
  }

  public deletById(uid: string): Observable<boolean> {
    this.store.save((state: AppState) => ({ ...state, user: state.user.filter(item => item.uid !== uid) }));
    return of(true);
  }

  public delete(): Observable<boolean> {
    this.store.delete((state: AppState) => ({ ...state, user: state.user = [] }));
    return of(true);
  }
}
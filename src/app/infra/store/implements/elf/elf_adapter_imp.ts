export class NgRxAdapterImp {}
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { UserRepository } from 'src/app/data/models/user.model';
import { UserEntity } from 'src/app/domain/entities/user.entity';



export const enum LoadingState {
  INIT = "INIT",
  LOADING = "LOADING",
  LOADED = "LOADED"
}

export interface ErrorState {
  errorMsg: string;
}

export type CallState = LoadingState | ErrorState;

export interface UserState {
  user: UserEntity[];
  callState: CallState;
}

const defaultState: UserState = {
  user: [],
  callState: LoadingState.INIT
};

function getError(callState: CallState): LoadingState | string | null {
  if ((callState as ErrorState).errorMsg !== undefined) {
    return (callState as ErrorState).errorMsg;
  }

  return null;
}

@Injectable()
export class UserCacheDatasourceImp extends ComponentStore<UserState> implements UserRepository {

  constructor() {
    super(defaultState);
  }

  private readonly loading$: Observable<boolean> = this.select(
    state => state.callState === LoadingState.LOADING
  );

  private readonly error$: Observable<LoadingState | string | null> = this.select(state =>
    getError(state.callState)
  );

  // UPDATERS
  private readonly updateError = this.updater((state: UserState, error: string) => {
    return {
      ...state,
      callState: {
        errorMsg: error
      }
    };
  });

  private readonly setLoading = this.updater((state: UserState) => {
    return {
      ...state,
      callState: LoadingState.LOADING
    };
  });

  private readonly setLoaded = this.updater((state: UserState) => {
    return {
      ...state,
      callState: LoadingState.LOADED
    };
  });

  public getUser(): Observable<UserEntity[]> {
    return this.select(state => state.user);
  }

  public addUser(content: UserEntity): Observable<any> {
    const store = this.updater((state: UserState, newItem: UserEntity) => ({
      ...state,
      user: [...state.user, newItem]
    }));

    store(content);

    return of(true);
  }

  public updateUser(content: UserEntity): Observable<any> {
    const store = this.updater((state: UserState, updatedItem: UserEntity) => ({
      ...state,
      items: state.user.map(item => (item.uid === updatedItem.uid ? updatedItem : item))
    }));

    store(content);

    return of(true);
  }

  public deletByIdUser(uid: string): Observable<any> {
    const store = this.updater((state: UserState, uid: string) => ({
      ...state,
      items: state.user.filter(item => item.uid !== uid)
    }));

    store(uid);

    return of(true);
  }

  public deleteUser(): Observable<any> {
    const store = this.updater((state: UserState) => ({
      ...state,
      items: state.user = []
    }));

    store();

    return of(true);
  }
}
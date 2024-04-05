import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { IAuthenticationStoreDatasource } from '../authentication_store_datasource';
import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';

export interface UserState {
  user: UserEntity[];
}

const defaultState: UserState = {
  user: [],
};

@Injectable()
export class UserNgRxStoreDatasourceImp extends ComponentStore<UserState> implements IAuthenticationStoreDatasource {

  private userLocalStorege!: UserEntity | undefined;

  constructor() {
    super(defaultState);
  }

  readonly user$ = this.select(({ user }) => user);

  readonly loadUser = this.updater((state, user: UserEntity[] | null) => ({
    ...state,
    user: user || [],
  }));

  public setCurrentTokenLocalStorege(content: AuthorizationEntity): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  
  public deleteCurrentTokenLocalStorege(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  public getCurrentTokenLocalStorege(): Observable<AuthorizationEntity> {
    throw new Error('Method not implemented.');
  }

  public setCurrentUserLocalStorege(content: UserEntity): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  public deletCurrentUserLocalStorege(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  public getCurrentUserLocalStorege(): Observable<UserEntity> {
    throw new Error('Method not implemented.');
  }
}
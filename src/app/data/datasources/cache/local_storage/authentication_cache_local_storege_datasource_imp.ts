import { Injectable } from '@angular/core';
import { Observable, catchError, from, of, switchMap, throwError } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { ILocalStorageAdapter } from 'src/app/infra/cache/local_storage_adapter';
import { IAuthenticationCacheDatasource } from '../authentication_cache_datasource';

@Injectable({ providedIn: 'root' })
export class AuthenticationCacheLocalStorageDatasourceImp implements IAuthenticationCacheDatasource {

    constructor(
        private tokenLocalStorage: ILocalStorageAdapter<AuthorizationEntity>,
        private userLocalStorage: ILocalStorageAdapter<UserEntity>
    ) { }

    public setCurrentTokenLocalStorege(content: AuthorizationEntity): Observable<boolean> {
        return from(this.tokenLocalStorage.save('TOKEN_AUTHORIZATION', content)).pipe(
            switchMap(() => of(true))
        ); 
    }

    public getCurrentTokenLocalStorege(): Observable<AuthorizationEntity> {
        return from(this.tokenLocalStorage.fetch('TOKEN_AUTHORIZATION')).pipe(
            switchMap((value) => {
                return of(value)
            }),
        );
    }
 
    public setCurrentUserLocalStorege(content: UserEntity): Observable<boolean> {
        return from(this.userLocalStorage.save('TOKEN_USER', content)).pipe(
            switchMap((value) => {
                return of(value)
            }),
        );
    }

    public getCurrentUserLocalStorege(): Observable<UserEntity> {
        return from(this.userLocalStorage.fetch('TOKEN_USER')).pipe(
            switchMap((value) => {
                return of(value)
            }),
        );
    }

    public deleteCurrentTokenLocalStorege(): Observable<boolean> {
        return from(this.tokenLocalStorage.delete('TOKEN_AUTHORIZATION')).pipe(
            switchMap((value) => {
                return of(value)
            }),
        );
    }

    public deletCurrentUserLocalStorege(): Observable<boolean> {
        return from(this.userLocalStorage.delete('TOKEN_USER')).pipe(
            switchMap((value) => {
                return of(value)
            }),
        );
    }
}
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap, throwError } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { IAuthenticationCacheDatasource } from '../authentication_cache_datasource';

@Injectable({ providedIn: 'root' })
export class AuthenticationCacheInMemoryDatasourceImp implements IAuthenticationCacheDatasource {

    private userLocalStorege!: UserEntity | undefined;
    private tokenLocalStorege!: AuthorizationEntity | undefined;


    public setCurrentTokenLocalStorege(content: AuthorizationEntity): Observable<boolean> {
        this.tokenLocalStorege = content
        return of(true);
    }

    public getCurrentTokenLocalStorege(): Observable<AuthorizationEntity> {
        return of(this.tokenLocalStorege!);
    }

    public setCurrentUserLocalStorege(content: UserEntity): Observable<boolean> {
        this.userLocalStorege = content
        return of(true);
    }

    public getCurrentUserLocalStorege(): Observable<UserEntity> {
        return of(this.userLocalStorege!);
    }

    public deleteCurrentTokenLocalStorege(): Observable<boolean> {
        this.tokenLocalStorege = undefined;
        return of(true);
    }

    public deletCurrentUserLocalStorege(): Observable<boolean> {
        this.userLocalStorege = undefined;
        return of(true);
    }
}
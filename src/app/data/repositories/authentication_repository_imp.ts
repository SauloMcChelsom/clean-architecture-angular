import { Injectable } from '@angular/core';
import { Observable, catchError, combineLatest, concatMap, delay, forkJoin, from, map, mergeMap, of, switchMap, take, tap, throwError } from 'rxjs';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

import { AuthenticationDatasource } from '../datasources/datasource';
import { CurrentUserCache, TokenCache } from '../cache/cache';

@Injectable({ providedIn: 'root' })
export class AuthenticationRepositoryImp implements AuthenticationRepository {

    constructor(
        private datasource: AuthenticationDatasource, 
        private tokenCache: TokenCache,
        private userCache:CurrentUserCache
    ) { }

    createNewAccount(content: AuthenticationEntity): Observable<AuthorizationEntity> {
        return this.datasource.createNewAccount(content)
        .pipe(
            tap(() => this.tokenCache.delete(),
        ))
        .pipe(
            tap((token) => this.tokenCache.save(token),
        ))
    }

    signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity> {
        return this.datasource.signInWithEmailAndPassword(email, password)
        .pipe(
            tap((token) =>{
                from([
                    this.tokenCache.delete(),
                    this.tokenCache.save(token),
                    this.getCurrentUser()
                ])
                .pipe(concatMap(obs => obs))
                .pipe(take(3))
                .subscribe({})
            })
        );
    }

    validToken(content: AuthorizationEntity): Observable<boolean> {
        return this.datasource.validToken(content);
    }

    isAuthenticated(): Observable<boolean> {
        return this.tokenCache.results().pipe(
            switchMap((token) => {
                if (!token) {
                    return throwError(() => 'Você deve logar');
                }
                return this.validToken(token[0])
            })
        )
    }

    isEmailAlreadyExists(content: string): Observable<boolean> {
        return this.datasource.isEmailAlreadyExists(content);
    }

    getCurrentUser(): Observable<UserEntity> {
        return this.tokenCache.results().pipe(
            switchMap((token: AuthorizationEntity[]) => {
                return this.validToken(token[0])
                .pipe(
                    switchMap(() => {
                        return this.userCache.results().pipe(
                            switchMap((user:UserEntity[]) => {
                                if(user.length ==  0){
                                    return this.getUserByUID(token[0].uid).pipe(
                                        switchMap((user:UserEntity|undefined)=>{
                                            if(!user){
                                                return throwError(() => 'Você deve logar, usuario saiu');
                                            }
                    
                                            this.userCache.save(user);
                                            return of(user);
                                        })
                                    )
                                }
                                return of(user[0])
                            })
                        )
                    })
                ).pipe(
                    catchError(err => {
                      this.userCache.delete()
                      this.tokenCache.delete()
                      throw err;
                    })
                )
            })
        )
    }

    public getUserByUID(uid: string): Observable<UserEntity|undefined> {
        return this.datasource.getUserByUID(uid);
    }

    forgotPassword(content: string): Observable<boolean> {
        return this.datasource.forgotPassword(content);
    }

    getCurrentToken(): Observable<AuthorizationEntity> {
        return this.tokenCache.results().pipe(
            switchMap((token) => {
                if (!token) {
                    return throwError(() => 'Você deve logar');
                }

                return of(token[0])
            })
        )
    }

    revokeToken(content: AuthorizationEntity): Observable<boolean> {
        return of();
        /*return of([]).pipe(
            switchMap(() => {
                return this.toke.getToken().pipe(
                    switchMap((value) => {
                        if (!value) {
                            return throwError(() => 'Você deve logar');
                        }

                        return this.auth.revokeToken(content).pipe(
                            tap(() => this.logout())
                        )
                    })
                )
            })
        );*/
    }

    refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity> {
        return of();
        /*return of([]).pipe(
            switchMap(() => {
                return this.toke.getToken().pipe(
                    switchMap((value) => {
                        if (!value) {
                            return throwError(() => 'Você deve logar');
                        }

                        return this.auth.refreshToken(content);
                    })
                )
            }),
        );*/
    }

    logout(): Observable<boolean> {
        return this.tokenCache.results().pipe(
            switchMap((value) => {
                if (value.length == 0) {
                    return throwError(() => 'Você ja esta deslogado');
                }

                this.datasource.logout()
                this.tokenCache.delete()
                this.userCache.delete()

                return of(true)
            })
        )
    }
}
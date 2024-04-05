import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { AuthenticationStoreDatasourceImp } from '../datasources/store/implements/authentication_store_datasource_imp';

@Injectable({ providedIn: 'root' })
export class AuthenticationRepositoryImp implements IAuthenticationRepository {

    constructor(private datasource: IAuthenticationRepository, private store: AuthenticationStoreDatasourceImp) { }

    createNewAccount(content: AuthenticationEntity): Observable<AuthorizationEntity> {
        return this.datasource.createNewAccount(content)
            .pipe(tap((token) => this.store.setCurrentTokenLocalStorege(token)));
    }

    signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity> {
        return this.datasource.signInWithEmailAndPassword(email, password)
            .pipe(tap((token) => this.store.setCurrentTokenLocalStorege(token)));
    }

    validToken(content: AuthorizationEntity): Observable<boolean> {
        return this.datasource.validToken(content);
    }

    isAuthenticated(): Observable<boolean> {
        return of([]).pipe(
            switchMap(() => {
                return this.store.getCurrentTokenLocalStorege().pipe(
                    switchMap((token) => {
                        if (!token) {
                            return throwError(() => 'Você deve logar');
                        }

                        return of(true)
                    })
                )
            })
        )
    }

    isEmailAlreadyExists(content: string): Observable<boolean> {
        return this.datasource.isEmailAlreadyExists(content);
    }

    getCurrentUser(): Observable<UserEntity> {
        return of([]).pipe(
            switchMap(() => {
                return this.store.getCurrentTokenLocalStorege().pipe(
                    switchMap((token) => {
                        if (!token) {
                            return throwError(() => 'Você deve logar');
                        }

                        return of(token)
                    })
                )
            }),
            switchMap((token) => {
                return this.validToken(token).pipe(
                    switchMap(() => of(token))
                )
            }),
            switchMap((token) => {
                return this.store.getCurrentUserLocalStorege()
                    .pipe(
                        switchMap((user) => {
                            if (user) {
                                return of(user);
                            }

                            return this.datasource.getCurrentUser().pipe(
                                tap((user) => this.store.setCurrentUserLocalStorege(user))
                            );
                        }),
                    )
            }),
            catchError(error => throwError(() => {
                this.store.deletCurrentUserLocalStorege()
                return error;
            }))
        );
    }

    forgotPassword(content: string): Observable<boolean> {
        return this.datasource.forgotPassword(content);
    }

    getCurrentToken(): Observable<AuthorizationEntity> {
        return this.store.getCurrentTokenLocalStorege().pipe(
            switchMap((token) => {
                if (!token) {
                    return throwError(() => 'Você deve logar')
                }
                return of(token);
            })
        )
    }

    revokeToken(content: AuthorizationEntity): Observable<boolean> {
        return of([]).pipe(
            switchMap(() => {
                return this.store.getCurrentTokenLocalStorege().pipe(
                    switchMap((value) => {
                        if (!value) {
                            return throwError(() => 'Você deve logar');
                        }

                        return this.datasource.revokeToken(content).pipe(
                            tap(() => this.logout())
                        )
                    })
                )
            })
        );
    }

    refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity> {
        return of([]).pipe(
            switchMap(() => {
                return this.store.getCurrentTokenLocalStorege().pipe(
                    switchMap((value) => {
                        if (!value) {
                            return throwError(() => 'Você deve logar');
                        }

                        return this.datasource.refreshToken(content);
                    })
                )
            }),
        );
    }

    logout(): Observable<boolean> {
        return of([]).pipe(
            switchMap(() => {
                return this.store.getCurrentTokenLocalStorege().pipe(
                    switchMap((value) => {
                        if (!value) {
                            return throwError(() => 'Você ja esta deslogado');
                        }

                        return this.datasource.logout().pipe(
                            tap(() => this.store.deletCurrentUserLocalStorege()),
                            tap(() => this.store.deleteCurrentTokenLocalStorege())
                        );
                    })
                )
            })
        );
    }
}
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { UserRepository } from '../models/user.model';
import { TokenRepository } from '../models/toke.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationRepositoryImp implements AuthenticationRepository {

    constructor(
        private auth: AuthenticationRepository, 
        private user: UserRepository,
        private toke: TokenRepository
    ) { }

    createNewAccount(content: AuthenticationEntity): Observable<AuthorizationEntity> {
        return this.auth.createNewAccount(content)
            .pipe(tap((token) => this.toke.addToken(token)));
    }

    signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity> {
        return this.auth.signInWithEmailAndPassword(email, password)
            .pipe(tap((token) => this.toke.addToken(token)));
    }

    validToken(content: AuthorizationEntity): Observable<boolean> {
        return this.auth.validToken(content);
    }

    isAuthenticated(): Observable<boolean> {
        return of([]).pipe(
            switchMap(() => {
                return this.user.results().pipe(
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
        return this.auth.isEmailAlreadyExists(content);
    }

    getCurrentUser(): Observable<UserEntity> {
        return of([]).pipe(
            switchMap(() => {
                return this.toke.getToken().pipe(
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
                return this.user.results()
                    .pipe(
                        switchMap((user) => {
                            if (user) {
                                return of(user[0]);
                            }

                            return this.auth.getCurrentUser().pipe(
                                tap((user) => this.user.save(user))
                            );
                        }),
                    )
            }),
            catchError(error => throwError(() => {
                this.user.delete()
                return error;
            }))
        );
    }

    forgotPassword(content: string): Observable<boolean> {
        return this.auth.forgotPassword(content);
    }

    getCurrentToken(): Observable<AuthorizationEntity> {
        return this.toke.getToken().pipe(
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
        );
    }

    refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity> {
        return of([]).pipe(
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
        );
    }

    logout(): Observable<boolean> {
        return of([]).pipe(
            switchMap(() => {
                return this.toke.getToken().pipe(
                    switchMap((value) => {
                        if (!value) {
                            return throwError(() => 'Você ja esta deslogado');
                        }

                        return this.auth.logout().pipe(
                            tap(() => this.user.delete()),
                            tap(() => this.toke.deleteToken())
                        );
                    })
                )
            })
        );
    }
}
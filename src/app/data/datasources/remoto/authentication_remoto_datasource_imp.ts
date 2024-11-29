import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { HttpAdapter } from 'src/app/infra/http/http_adapter';
import { CREATE_NEW_ACCOUNT, FORGOT_PASSWORD, GET_CURRENT, GET_CURRENT_TOKEN, IS_EMAIL_ALREADY, LOGOUT, REFRESH_TOKEN, REVOKE_TOKEN, SIGN_IN_WITH_EMAIL_AND_PASSWORD } from 'src/config/endpoints/endpoint';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

@Injectable({ providedIn: 'root' })
export class AuthenticationRemotoDatasourceImp implements AuthenticationRepository {

    constructor(
        private userRequest: HttpAdapter<UserEntity>,
        private isRequest: HttpAdapter<boolean>,
        private authorizationRequest: HttpAdapter<AuthorizationEntity>
    ) { }

    public isAuthenticated(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity> {
        return this.authorizationRequest.createAndStartRequest(REFRESH_TOKEN)
    }

    public createNewAccount(user: AuthenticationEntity): Observable<AuthorizationEntity> {
        return this.authorizationRequest.createAndStartRequest(CREATE_NEW_ACCOUNT, '/', {
            body: user
        })
    }

    public signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity> {
        return this.authorizationRequest.createAndStartRequest(SIGN_IN_WITH_EMAIL_AND_PASSWORD, '/', {
            body: {
                email: email,
                password: password
            }
        })
    }

    public isEmailAlreadyExists(email: string): Observable<boolean> {
        return this.isRequest.createAndStartRequest(IS_EMAIL_ALREADY, '/', {
            body: {
                email: email
            }
        })
    }

    public getCurrentUser(): Observable<UserEntity> {
        return this.userRequest.createAndStartRequest(GET_CURRENT);
    }

    public forgotPassword(email: string): Observable<boolean> {
        return this.isRequest.createAndStartRequest(FORGOT_PASSWORD, '/', {
            body: {
                email: email
            }
        });
    }

    public validToken(content: AuthorizationEntity): Observable<boolean> {
        return this.isRequest.createAndStartRequest(GET_CURRENT)
    }

    public revokeToken(content: AuthorizationEntity): Observable<boolean> {
        return this.isRequest.createAndStartRequest(REVOKE_TOKEN);
    }

    public getCurrentToken(): Observable<AuthorizationEntity> {
        return this.authorizationRequest.createAndStartRequest(GET_CURRENT_TOKEN);
    }

    public logout(): Observable<boolean> {
        return this.isRequest.createAndStartRequest(LOGOUT);
    }
}
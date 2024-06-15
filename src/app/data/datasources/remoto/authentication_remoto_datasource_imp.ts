import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { HttpAdapter } from 'src/app/infra/http/http_adapter';
import { CREATE_NEW_ACCOUNT_ENDPOINT_CONFIG, FORGOT_PASSWORD_ENDPOINT_CONFIG, GET_CURRENT_ENDPOINT_CONFIG, GET_CURRENT_TOKEN_ENDPOINT_CONFIG, IS_EMAIL_ALREADY_ENDPOINT_CONFIG, LOGOUT_ENDPOINT_CONFIG, REFRESH_TPOKEN_ENDPOINT_CONFIG, REVOKE_TOKEN_ENDPOINT_CONFIG, SIGN_IN_WITH_EMAIL_AND_PASSWORD_ENDPOINT_CONFIG } from 'src/config/endpoints/endpoint';
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
        return this.authorizationRequest.createAndStartRequest(REFRESH_TPOKEN_ENDPOINT_CONFIG)
    }

    public createNewAccount(user: AuthenticationEntity): Observable<AuthorizationEntity> {
        return this.authorizationRequest.createAndStartRequest(CREATE_NEW_ACCOUNT_ENDPOINT_CONFIG, '/', {
            body: user
        })
    }

    public signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity> {
        return this.authorizationRequest.createAndStartRequest(SIGN_IN_WITH_EMAIL_AND_PASSWORD_ENDPOINT_CONFIG, '/', {
            body: {
                email: email,
                password: password
            }
        })
    }

    public isEmailAlreadyExists(email: string): Observable<boolean> {
        return this.isRequest.createAndStartRequest(IS_EMAIL_ALREADY_ENDPOINT_CONFIG, '/', {
            body: {
                email: email
            }
        })
    }

    public getCurrentUser(): Observable<UserEntity> {
        return this.userRequest.createAndStartRequest(GET_CURRENT_ENDPOINT_CONFIG);
    }

    public forgotPassword(email: string): Observable<boolean> {
        return this.isRequest.createAndStartRequest(FORGOT_PASSWORD_ENDPOINT_CONFIG, '/', {
            body: {
                email: email
            }
        });
    }

    public validToken(content: AuthorizationEntity): Observable<boolean> {
        return this.isRequest.createAndStartRequest(GET_CURRENT_ENDPOINT_CONFIG)
    }

    public revokeToken(content: AuthorizationEntity): Observable<boolean> {
        return this.isRequest.createAndStartRequest(REVOKE_TOKEN_ENDPOINT_CONFIG);
    }

    public getCurrentToken(): Observable<AuthorizationEntity> {
        return this.authorizationRequest.createAndStartRequest(GET_CURRENT_TOKEN_ENDPOINT_CONFIG);
    }

    public logout(): Observable<boolean> {
        return this.isRequest.createAndStartRequest(LOGOUT_ENDPOINT_CONFIG);
    }
}
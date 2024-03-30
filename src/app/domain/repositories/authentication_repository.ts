import { Observable } from "rxjs";
import { AuthenticationEntity } from "../entities/authentication_entity";
import { AuthorizationEntity } from "../entities/authorization_entity";
import { UserEntity } from "../entities/user.entity";

export abstract class IAuthenticationRepository {

    abstract createNewAccount(content: AuthenticationEntity): Observable<AuthorizationEntity>;

    abstract signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity>;

    abstract validToken(content: AuthorizationEntity): Observable<boolean>;

    abstract revokeToken(content: AuthorizationEntity): Observable<boolean>;

    abstract refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity>;

    abstract getCurrentToken(): Observable<AuthorizationEntity>;

    abstract isAuthenticated(): Observable<boolean>;

    abstract isEmailAlreadyExists(content: string): Observable<boolean>;

    abstract getCurrentUser(): Observable<UserEntity>;

    abstract forgotPassword(content: string): Observable<boolean>;
    
    abstract logout(): Observable<boolean>;
}
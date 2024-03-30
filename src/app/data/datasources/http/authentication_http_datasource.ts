
import { Observable } from 'rxjs';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';


export abstract class IAuthenticationHttpDatasource {

    abstract createNewAccount(user: AuthenticationEntity): Observable<AuthorizationEntity>;

    abstract signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity>;

    abstract isEmailAlreadyExists(email: string): Observable<boolean>;

    abstract getCurrentUser(toke: AuthorizationEntity): Observable<UserEntity>;

    abstract forgotPassword(email: string): Observable<boolean>;

    abstract validToken(content: AuthorizationEntity): Observable<boolean>;

    abstract revokeToken(content: AuthorizationEntity): Observable<boolean>;

    abstract getCurrentToken(): Observable<AuthorizationEntity>;

    abstract logout(content: AuthorizationEntity): Observable<boolean>;

    abstract refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity>;
}
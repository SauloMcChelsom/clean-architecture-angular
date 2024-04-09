import { Observable } from "rxjs";
import { AuthorizationEntity } from "src/app/domain/entities/authorization_entity";

export abstract class TokenRepository {
    abstract getToken(): Observable<AuthorizationEntity>;

    abstract addToken(content: AuthorizationEntity): Observable<void>;

    abstract deleteByIdToken(content: AuthorizationEntity): Observable<void>;

    abstract updateToken(content: AuthorizationEntity): Observable<void>;

    abstract deleteToken(): Observable<void>;
}

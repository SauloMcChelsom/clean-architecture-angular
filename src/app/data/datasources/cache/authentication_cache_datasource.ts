import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';

export abstract class IAuthenticationCacheDatasource {

    abstract setCurrentTokenLocalStorege(content: AuthorizationEntity): Observable<boolean>;

    abstract deleteCurrentTokenLocalStorege(): Observable<boolean>;

    abstract getCurrentTokenLocalStorege(): Observable<AuthorizationEntity>;

    abstract setCurrentUserLocalStorege(content: UserEntity): Observable<boolean>;

    abstract deletCurrentUserLocalStorege(): Observable<boolean>;

    abstract getCurrentUserLocalStorege(): Observable<UserEntity>;
}
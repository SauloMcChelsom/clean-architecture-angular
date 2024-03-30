import { Observable } from "rxjs";
import { UserEntity } from "../../entities/user.entity";
import { AuthenticationEntity } from "../../entities/authentication_entity";
import { AuthorizationEntity } from "../../entities/authorization_entity";

export abstract class ICreateNewAccountUseCase {
    abstract createNewAccount(user: AuthenticationEntity): Observable<AuthorizationEntity>;
}

export abstract class ISignInWithEmailAndPassworUseCase {
    abstract signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity>;
}

export abstract class IValidTokenUseCase {
    abstract validToken(content: AuthorizationEntity): Observable<boolean>;
}

export abstract class IRevokeTokenUseCase {
    abstract revokeToken(content: AuthorizationEntity): Observable<boolean>;
}

export abstract class IGetCurrentTokenUseCase {
    abstract getCurrentToken(): Observable<AuthorizationEntity>;
}

export abstract class IIsAuthenticatedUseCase {
    abstract isAuthenticated(): Observable<boolean>;
}

export abstract class IIsEmailAlreadyExistsUseCase {
    abstract isEmailAlreadyExists(content: string): Observable<boolean>;
}

export abstract class IGetCurrentUserUseCase {
    abstract getCurrentUser(): Observable<UserEntity>;
}

export abstract class IForgotPasswordUseCase {
    abstract forgotPassword(content: string): Observable<boolean>;
}

export abstract class ILogoutUseCase {
    abstract logout(): Observable<boolean>;
}
export abstract class IRefreshTokenUseCase {
    abstract refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity>;
}
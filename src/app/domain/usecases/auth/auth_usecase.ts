import { Observable } from "rxjs";
import { UserEntity } from "../../entities/user.entity";
import { AuthenticationEntity } from "../../entities/authentication_entity";
import { AuthorizationEntity } from "../../entities/authorization_entity";

export abstract class CreateNewAccountUseCase {
    abstract createNewAccount(user: AuthenticationEntity): Observable<AuthorizationEntity>;
}

export abstract class SignInWithEmailAndPassworUseCase {
    abstract signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity>;
}

export abstract class IValidTokenUseCase {
    abstract validToken(content: AuthorizationEntity): Observable<boolean>;
}

export abstract class RevokeTokenUseCase {
    abstract revokeToken(content: AuthorizationEntity): Observable<boolean>;
}

export abstract class GetCurrentTokenUseCase {
    abstract getCurrentToken(): Observable<AuthorizationEntity>;
}

export abstract class IsAuthenticatedUseCase {
    abstract isAuthenticated(): Observable<boolean>;
}

export abstract class IIsEmailAlreadyExistsUseCase {
    abstract isEmailAlreadyExists(content: string): Observable<boolean>;
}

export abstract class GetCurrentUserUseCase {
    abstract getCurrentUser(): Observable<UserEntity>;
}

export abstract class IForgotPasswordUseCase {
    abstract forgotPassword(content: string): Observable<boolean>;
}

export abstract class LogoutUseCase {
    abstract logout(): Observable<boolean>;
}
export abstract class RefreshTokenUseCase {
    abstract refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity>;
}
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, throwError } from 'rxjs';
import { EmailValidate } from 'src/app/domain/helpers/validate/email_validate';
import { PasswordValidate } from 'src/app/domain/helpers/validate/password_validate';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { ISignInWithEmailAndPassworUseCase } from '../auth_usecase';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';


@Injectable({ providedIn: 'root' })
export class SignInWithEmailAndPasswordUseCaseImp implements ISignInWithEmailAndPassworUseCase {

    constructor(private _auth: IAuthenticationRepository) { }

    public signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity> {

        return forkJoin({
            'emailValidate': EmailValidate.isValidEmail(email),
            'notHaveSevenCharacters': PasswordValidate.validatePasswordNotHaveSevenCharacters(password),
            'ifExistOneLetter': PasswordValidate.validatePasswordIfExistOneLetter(password),
            'ifExistUppercaseLetter': PasswordValidate.validatePasswordIfExistUppercaseLetter(password),
            'ifExistLowercaseLetter': PasswordValidate.validatePasswordIfExistLowercaseLetter(password),
            'ifExistOneNumber': PasswordValidate.validatePasswordIfExistOneNumber(password),
            'ifExistOneSpecialCharacter': PasswordValidate.validatePasswordIfExistOneSpecialCharacter(password),
            'signIn': this._auth.signInWithEmailAndPassword(email, password)
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => show.signIn)
        );
    }
}
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, throwError } from 'rxjs';
import { ICreateNewAccountUseCase } from '../auth_usecase';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { EmailValidate } from 'src/app/domain/helpers/validate/email_validate';
import { UserValidate } from 'src/app/domain/helpers/validate/user_validade';
import { PasswordValidate } from 'src/app/domain/helpers/validate/password_validate';

@Injectable({ providedIn: 'root' })
export class CreateNewAccountUseCaseImp implements ICreateNewAccountUseCase {

    constructor(private _auth: IAuthenticationRepository) { }

    public createNewAccount(user: AuthenticationEntity): Observable<AuthorizationEntity> {
        return forkJoin({
            'emailValidate': EmailValidate.isValidEmail(user.email),
            'isValidUserNameFirst': UserValidate.isValidUserNameFirst(user.name!),
            'notHaveSevenCharacters': PasswordValidate.validatePasswordNotHaveSevenCharacters(user.password),
            'ifExistOneLetter': PasswordValidate.validatePasswordIfExistOneLetter(user.password),
            'ifExistUppercaseLetter': PasswordValidate.validatePasswordIfExistUppercaseLetter(user.password),
            'ifExistLowercaseLetter': PasswordValidate.validatePasswordIfExistLowercaseLetter(user.password),
            'ifExistOneNumber': PasswordValidate.validatePasswordIfExistOneNumber(user.password),
            'ifExistOneSpecialCharacter': PasswordValidate.validatePasswordIfExistOneSpecialCharacter(user.password),
            'createNewAccount': this._auth.createNewAccount(user)
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => show.createNewAccount)
        );
    }
}
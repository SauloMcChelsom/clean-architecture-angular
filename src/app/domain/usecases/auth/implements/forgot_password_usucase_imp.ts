
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, throwError } from 'rxjs';
import { IForgotPasswordUseCase } from '../auth_usecase';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { EmailValidate } from 'src/app/domain/helpers/validate/email_validate';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordUseCaseImp implements IForgotPasswordUseCase {

    constructor(private _auth: AuthenticationRepository) { }

    public forgotPassword(email: string): Observable<boolean> {
        return forkJoin({
            'emailValidate': EmailValidate.isValidEmail(email),
            'forgotPassword': this._auth.forgotPassword(email)
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => show.forgotPassword)
        );
    }
}
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, throwError } from 'rxjs';
import { EmailValidate } from 'src/app/domain/helpers/validate/email_validate';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { IIsEmailAlreadyExistsUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class IsEmailAlreadyExistsUseCaseImp implements IIsEmailAlreadyExistsUseCase {

    constructor(private _auth: AuthenticationRepository) { }

    public isEmailAlreadyExists(email: string): Observable<boolean> {
        return forkJoin({
            'emailValidate': EmailValidate.isValidEmail(email),
            'isEmailAlreadyExists': this._auth.isEmailAlreadyExists(email)
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => show.isEmailAlreadyExists)
        );
    }
}
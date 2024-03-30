import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { ILogoutUseCase } from '../auth_usecase';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

@Injectable({ providedIn: 'root' })
export class LogoutUseCaseImp implements ILogoutUseCase {

    constructor(private _authenticationRepository: IAuthenticationRepository) { }

    public logout(): Observable<boolean> {
        return this._authenticationRepository.logout();
    }
}
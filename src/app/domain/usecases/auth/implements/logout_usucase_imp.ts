import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { LogoutUseCase } from '../auth_usecase';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

@Injectable({ providedIn: 'root' })
export class LogoutUseCaseImp implements LogoutUseCase {

    constructor(private _authenticationRepository: AuthenticationRepository) { }

    public logout(): Observable<boolean> {
        return this._authenticationRepository.logout();
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIsAuthenticatedUseCase } from '../auth_usecase';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedUseCaseImp implements IIsAuthenticatedUseCase {

  constructor(private _authenticationRepository: IAuthenticationRepository) { }

  public isAuthenticated(): Observable<boolean> {
    return this._authenticationRepository.isAuthenticated();
  }
}
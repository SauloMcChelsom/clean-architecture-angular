import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IsAuthenticatedUseCase } from '../auth_usecase';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedUseCaseImp implements IsAuthenticatedUseCase {

  constructor(private _authenticationRepository: AuthenticationRepository) { }

  public isAuthenticated(): Observable<boolean> {
    return this._authenticationRepository.isAuthenticated();
  }
}
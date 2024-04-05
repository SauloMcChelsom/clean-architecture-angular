import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { GetCurrentTokenUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class GetCurrentTokenUseCaseImp implements GetCurrentTokenUseCase {

    constructor(private _auth: AuthenticationRepository) { }

    getCurrentToken(): Observable<AuthorizationEntity> {
        return this._auth.getCurrentToken()
    }
}
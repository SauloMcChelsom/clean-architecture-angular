import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { IGetCurrentTokenUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class GetCurrentTokenUseCaseImp implements IGetCurrentTokenUseCase {

    constructor(private _auth: IAuthenticationRepository) { }

    getCurrentToken(): Observable<AuthorizationEntity> {
        return this._auth.getCurrentToken()
    }
}
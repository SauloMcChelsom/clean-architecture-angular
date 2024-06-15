import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { RefreshTokenUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class RefreshTokenUseCaseImp implements RefreshTokenUseCase {

    constructor(private _auth: AuthenticationRepository) { }

    public refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity> {
        return this._auth.refreshToken(content);
    }
}
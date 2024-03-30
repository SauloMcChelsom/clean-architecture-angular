import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { IRefreshTokenUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class RefreshTokenUseCaseImp implements IRefreshTokenUseCase {

    constructor(private _auth: IAuthenticationRepository) { }

    public refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity> {
        return this._auth.refreshToken(content);
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { RefreshTokenUseCase, RevokeTokenUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class RevokeTokenUseCaseImp implements RevokeTokenUseCase {

    constructor(private _auth: AuthenticationRepository) { }
    
    public revokeToken(content: AuthorizationEntity): Observable<boolean> {
        return this._auth.revokeToken(content);
    }

}
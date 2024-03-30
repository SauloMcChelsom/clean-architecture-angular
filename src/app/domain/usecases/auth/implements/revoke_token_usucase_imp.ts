import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { IRefreshTokenUseCase, IRevokeTokenUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class RevokeTokenUseCaseImp implements IRevokeTokenUseCase {

    constructor(private _auth: IAuthenticationRepository) { }
    
    public revokeToken(content: AuthorizationEntity): Observable<boolean> {
        return this._auth.revokeToken(content);
    }

}
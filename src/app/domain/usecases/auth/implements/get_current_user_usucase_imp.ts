import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { IGetCurrentUserUseCase } from '../auth_usecase';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

@Injectable({ providedIn: 'root' })
export class GetCurrentUserUseCaseImp implements IGetCurrentUserUseCase {

    constructor(private _auth: IAuthenticationRepository) { }

    public getCurrentUser(): Observable<UserEntity> {
        return this._auth.getCurrentUser();
    }
}
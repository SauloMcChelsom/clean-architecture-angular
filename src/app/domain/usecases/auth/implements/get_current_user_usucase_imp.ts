import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { GetCurrentUserUseCase } from '../auth_usecase';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';

@Injectable({ providedIn: 'root' })
export class GetCurrentUserUseCaseImp implements GetCurrentUserUseCase {

    constructor(private _auth: AuthenticationRepository) { }

    public getCurrentUser(): Observable<UserEntity> {
        return this._auth.getCurrentUser();
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { GetUserByUIDUseCase } from '../auth_usecase';

@Injectable({ providedIn: 'root' })
export class GetUserByUIDUseCaseImp implements GetUserByUIDUseCase {

    constructor(private _auth: AuthenticationRepository) { }

    public getUserByUID(uid: string): Observable<UserEntity|undefined> {
        return this._auth.getUserByUID(uid);
    }
}
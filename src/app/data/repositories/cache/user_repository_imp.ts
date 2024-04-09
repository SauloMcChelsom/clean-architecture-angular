import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { UserRepository } from '../../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserRepositoryImp implements UserRepository {

    constructor(private store: UserRepository) { }

    public getUser(): Observable<UserEntity[]> {
        return this.store.getUser();
    }
    
    public addUser(content: UserEntity): Observable<void> {
        return this.store.addUser(content);
    }

    public updateUser(content: UserEntity): Observable<void> {
        return this.store.updateUser(content);
    }

    public deletByIdUser(uid: string): Observable<void> {
        return this.store.deletByIdUser(uid);
    }

    public deleteUser(): Observable<void> {
        return this.store.deleteUser();
    }
}
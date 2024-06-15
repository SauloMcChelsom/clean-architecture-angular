import { Observable } from "rxjs";
import { UserEntity } from "src/app/domain/entities/user.entity";

export abstract class UserRepository {
    abstract results(): Observable<UserEntity[]>;

    abstract save(content: UserEntity): Observable<any>;
  
    abstract update(content: UserEntity): Observable<any>;
  
    abstract deletById(uid: string): Observable<any>;
  
    abstract delete(): Observable<any>;
}
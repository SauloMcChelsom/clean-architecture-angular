import { Observable } from "rxjs";

export abstract class StoreRepository<T> {

  abstract select(): Observable<T[]>;

  abstract save(content: T): Observable<any>;

  abstract update(content: T): Observable<any>;

  abstract deletById(uid: string): Observable<any>;

  abstract delete(): Observable<any>;
}
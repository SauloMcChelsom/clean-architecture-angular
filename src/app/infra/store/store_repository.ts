import { Observable } from "rxjs";

export abstract class StoreRepository {

  abstract select(): Observable<any[]>;

  abstract save(content: any): Observable<any>;

  abstract update(content: any): Observable<any>;

  abstract deletById(uid: string): Observable<any>;

  abstract delete(): Observable<any>;
}
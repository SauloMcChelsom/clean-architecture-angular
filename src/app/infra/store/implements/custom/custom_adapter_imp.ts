import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { StoreAdapter } from '../../store_adapter';

@Injectable()
export class CustomAdapterImp<T> implements StoreAdapter<T> {

  private state$: BehaviorSubject<T>;

  constructor(@Inject('') public initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  select<R>(selector: (state: T) => R): Observable<R> {
    return this.state$.asObservable().pipe(
      map(selector)
    );
  }

  save(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.state$.next(updatedState);
  }

  delete(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.state$.next(updatedState);
  }

  deletById(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.state$.next(updatedState);
  }
  
  update(updateFn: (state: T) => T): void {
    const currentState = this.state$.getValue();
    const updatedState = updateFn(currentState);
    this.state$.next(updatedState);
  }
}

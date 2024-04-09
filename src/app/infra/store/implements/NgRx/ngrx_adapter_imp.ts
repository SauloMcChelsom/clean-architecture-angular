import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BehaviorSubject } from 'rxjs';
import { StoreAdapter } from '../../store_adapter';

@Injectable()
export class NgRxAdapterImp<T> extends ComponentStore<any> implements StoreAdapter<T> {

  public stateX$: BehaviorSubject<T>;

  constructor(@Inject('') public initialState: T) {
    super();
    this.stateX$ = new BehaviorSubject<T>(initialState)
  }

  public selectX = (selector: (state: T) => T) => this.updater(selector); 

  public save = (updateFn: (state: T) => T) => this.updater(updateFn);

  public update = (updateFn: (state: T) => T) => this.updater(updateFn);

  public deletById = (updateFn: (state: T) => T) => this.updater(updateFn);

  public delete = (updateFn: (state: T) => T) => this.updater(updateFn);
}
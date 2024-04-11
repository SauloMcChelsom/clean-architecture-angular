import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { StoreAdapter } from '../../store_adapter';

@Injectable()
export class NgRxAdapterImp<T> extends ComponentStore<any> implements StoreAdapter<T> {

  constructor(@Inject('') public initialState: T) {
    super(initialState);
  }

  public save = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();
  };

  public update = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();
  };

  public deletById = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();
  };

  public delete = (updateFn: (state: T) => T) => {
    const run = this.updater(updateFn);
    run();
  };
}
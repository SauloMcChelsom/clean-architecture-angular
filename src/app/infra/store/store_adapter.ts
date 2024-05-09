export abstract class StoreAdapter<T> {

  abstract initialState(initialState: T): void;

  abstract results(selector: (state: T) => T): any;

  abstract save(updateFn: (state: T) => T): any;

  abstract update(updateFn: (state: T) => T): any;

  abstract deletById(updateFn: (state: T) => T): any;

  abstract delete(updateFn: (state: T) => T): any;
}
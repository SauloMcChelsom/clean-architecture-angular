export abstract class StoreAdapter<T> {

  abstract init(initialState: T): void;

  abstract select(selector: (state: T) => T): any;

  abstract save(updateFn: (state: T) => T): any;

  abstract update(updateFn: (state: T) => T): any;

  abstract deletById(updateFn: (state: T) => T): any;

  abstract delete(updateFn: (state: T) => T): any;
}
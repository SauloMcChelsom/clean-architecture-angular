import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

/**
 * O StateService espera um tipo genérico Tque representa a interface de estado. Esse tipo é passado ao estender o StateService.
 */
export class StateService<T> {
  private state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  /**
   * retorna o instantâneo do estado atual
   */
  protected get state(): T {
    return this.state$.getValue();
  }

  /**
   * Essa função é chamada quando state$ emite um novo estado.
   * Dentro do RxJS, mapa função de retorno de chamada retornará um pedaço do estado.
   * distinctUntilChanged ignorará as emissões até que a parte selecionada do estado mantenha uma nova referência de valor/objeto.
   * this.state$.asObservable() garante que o select méperson retorne um Observable (e não um AnonymousSubject).
   */
  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  /**
   * setState aceita um tipo parcial.
   * Isso nos permite ser preguiçosos e passar apenas algumas propriedades de uma interface de estado maior.
   * Dentro do state$.next méperson, o estado parcial é mesclado com o objeto de estado completo. Finalmente,
   * o BehaviorSubject this.state$ emitirá um novo objeto de estado.
   */
  protected setState(newState: Partial<T>) {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  }
}

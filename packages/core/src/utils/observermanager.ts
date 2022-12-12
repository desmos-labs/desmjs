export type Observer<T> = (newStatus: T) => any;

/**
 * Class that manages a set of observer that are notified when a new
 * even is emitted.
 */
export class ObserverManager<T> {

  private observers: Observer<T>[];

  constructor() {
    this.observers = [];
  }

  /**
   * Adds an observer that will be called each time an event is emitted.
   * @param observer - The observer to be called.
   */
  public addObserver(observer: Observer<T>) {
    this.observers.push(observer);
  }

  /**
   * Removes an observer so that it will not be called when an event is emitted.
   * @param observer - The observer to be removed.
   */
  public removeObserver(observer: Observer<T>) {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Removes all the observers.
   */
  public removeAll() {
    if (this.observers.length > 0) {
      this.observers.splice(0, this.observers.length);
    }
  }


  /**
   * Notifies the observers.
   * @param newStatus - The emitted event.
   */
  public emit(newStatus: T) {
    this.observers.forEach((o) => o(newStatus));
  }

}

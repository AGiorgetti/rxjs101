import { Observable } from "rxjs";

/**
 * Observable
 * 
 * - can be created invoking its constructor, Observable.create() or any other
 *   creation operator.
 * - can be subscribed by Observers invocking the .subscribe() method.
 * - executes to delived next/error/complete notifications to the subscribed Observers.
 * - the execution can be cancelled.
 */

// How to create a new Observable:
//
// The constructor argument is a function that is called when the Observable is
// initially subscribed to.
// 
// This function represents an Observable execution that happens for any
// Observer/Consumer that subscribes. 
//
// The subscriber is an object that has 3 methods:
//
// - `next` called when a new value is available to be processed.
// - `error` called when an  error has been raised.
// - `complete` called to notify a successful completion.
const o$ = new Observable<number>(subscriber => subscriber.next(1));

// creates a Subscription: an "execution environment" for the observer/consumer.
// the observable will start emitting values only after a subscription.
const subscription = o$.subscribe(v => console.log("subscriber: " + v));

console.log(`is the observable active? ${!subscription.closed}`);

// the subscription can be used to cancel the execution, more on this later on.

// Output:
//
// subscriber: 1
// is the observable active? true

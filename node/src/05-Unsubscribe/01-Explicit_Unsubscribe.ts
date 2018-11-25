import { interval } from "rxjs";

/**
 * There's the need of a way of completing or cancelling the execution of 
 * an Observable.
 * This can be done calling the .unsubscribe() method of the Subscription object.
 * 
 * We should unsubscribe to:
 * - free resources not used anymore.
 * - avoid memory and performance leaks.
 * 
 * When you should unsubscribe ?
 */

// 1- Explicit Unsubscribe

console.log('* Explicit Unsubscribe');

const interval$ = interval(1000);

// .subscribe(), but also .connect() will return Subscriprion object we can use to cancel the execution.
const subscription = interval$.subscribe(
    data => console.log(`timer: ${data}`)
);

console.log(`was the subscription closed? ${subscription.closed}`);

subscription.unsubscribe();

console.log(`was the subscription closed? ${subscription.closed}`);
console.log('We unsubscribed before the timer could emit it\' first tick');

// Output:
//
// was the subscription closed? false
// (no message delivered)
// was the subscription closed? true
// We unsubscribed before the timer could emit it' first tick

import { of } from "rxjs";

// 2- Completed Observable

console.log('* Completed Observable');

// There's no need to unsubscribe to "completed" observable.
// Once the observable completes, all the subscription will be removed.

const source$ = of("single data"); // sync observable that completes after emitting the value.

const subscription = source$.subscribe(data => console.log(data));

console.log(`was the subscription closed? ${subscription.closed}`);
console.log('if "true" there\'s not need to unsubscribe.');

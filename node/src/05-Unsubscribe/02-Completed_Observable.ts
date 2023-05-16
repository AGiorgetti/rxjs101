import { of, Observable, Subscriber } from "rxjs";

// 2- Completed Observable

console.log('* Completed Observable');

// There's no need to unsubscribe to "completed" observable.
//
// Once the observable completes, all the subscriptions will be removed.
//
// You can complete an Observable:
// - because of the way the Sbservable is created (like the 'of' function).
// - calling the .complete() / .error() methods if available.
// - using some operators (see next examples).

/*
const source$ = new Observable<string>(Subscriber => {
    Subscriber.next("single data");
    Subscriber.complete();
});
*/
const source$ = of("single data"); // sync observable that completes after emitting the value.

const subscription = source$.subscribe({
    next: data => console.log(data), // 'next' function
    error: () => { console.log("error!") }, // 'error' function
    complete: () => { console.log("completed") }// 'complete' function 
});

console.log(`was the subscription closed? ${subscription.closed}`);
console.log('if "true" there\'s no need to unsubscribe.');

// Output:
//
// single data
// completed
// was the subscription closed? true
// if "true" there's no need to unsubscribe.

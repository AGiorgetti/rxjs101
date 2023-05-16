import { interval } from "rxjs";
import { take } from "rxjs/operators";

// 4- Use Operators that call Complete or Stop the observable

console.log('* Operators that call complete()');

// some operators complete the execution:
// - take(n): emits N values before stopping the observable.
// - takeWhile(predicate): tests the emitted values against a predicate, if it returns `false`, it will complete.
// - takeUntil(predicate): tests the emitted values against a predicate, if it returns `true`, it will complete.
// - first(): emits the first value and completes.
// - first(predicate): checks each value against a predicate function, if it returns `true`, the emits that value and completes.
// - toPromise(): converts the observable in a promise.

const subscription = interval(1000)
    .pipe(
        take(3)
    )
    .subscribe({
        next: data => console.log(`timer: ${data}`), // 'next' function
        error: () => { }, // 'error' function
        complete: () => console.log("completed") // 'complete' function
    });

console.log(`was the subscription closed? ${subscription.closed}`);

// just wait some more before checking the subscription
setTimeout(
    () => console.log(`was the subscription closed? ${subscription.closed}`),
    4000);

// Output:
//
// was the subscription closed? false
// timer: 0
// timer: 1
// timer: 2
// completed
// was the subscription closed? true (after 4s)
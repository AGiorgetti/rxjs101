import { of } from "rxjs";

// 2- Completed Observable

console.log('* Completed Observable');

// There's no need to unsubscribe to "completed" observable.
// Once the observable completes, all the subscription will be removed.

const source$ = of("single data"); // sync observable that completes after emitting the value.

const subscription = source$.subscribe(
    data => console.log(data), // 'next' function
    () => { }, // 'error' function
    () => { console.log("completed") // 'complete' function 
});

console.log(`was the subscription closed? ${subscription.closed}`);
console.log('if "true" there\'s no need to unsubscribe.');

// Output:
//
// single data
// completed
// was the subscription closed? true
// if "true" there's no need to unsubscribe.

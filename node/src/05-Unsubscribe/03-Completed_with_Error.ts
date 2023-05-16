import { Subject } from "rxjs";

// 3- Completed with Error

console.log('* Error Observable');

// An error also completes the Observable and kills subscriptions.    
const source$ = new Subject();
const subscription = source$.subscribe({
    next: data => console.log(data), // 'next' function
    error: data => console.log("error: " + data), // 'error' function
    complete: () => { console.log("completed") }// 'complete' function 
});

source$.next("msg1");

source$.error("error!");

console.log(`was the subscription closed? ${subscription.closed}`);
console.log('if "true" there\'s no need to unsubscribe.');

source$.next("msg2");

// Output:
//
// error!
// was the subscription closed? true
// if "true" there's no need to unsubscribe.

import { Subject } from "rxjs";

// 3- Completed with Error

console.log('* Error Observable');

// An error also completes the Observable and kills subscriptions.    
const source$ = new Subject();
const subscription = source$.subscribe(() => { }, data => console.log(data));

source$.error("error!");

console.log(`was the subscription closed? ${subscription.closed}`);
console.log('if "true" there\'s no need to unsubscribe.');

// Output:
//
// error!
// was the subscription closed? true
// if "true" there's no need to unsubscribe.

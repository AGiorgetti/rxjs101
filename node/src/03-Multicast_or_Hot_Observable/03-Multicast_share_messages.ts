import { ConnectableObservable, interval } from "rxjs";
import { publish } from "rxjs/operators";

// a Multicast / Hot observable is shared among all the subscribers.
// every subscriber will get the same message, there will be just one
// execution of the observable

const o$ = interval(1000)
    .pipe(
        publish()
    ) as ConnectableObservable<number>;

o$.connect();

// each subscriber will receive the same messages.

setTimeout(() => {
    o$.subscribe(v => console.log("1st subscriber: " + v));
}, 3000);

setTimeout(() => {
    o$.subscribe(v => console.log("2nd subscriber: " + v));
}, 6000);

// Output:
//
// 1st subscriber: 2 (after 3s)
// 1st subscriber: 3
// 1st subscriber: 4
// 1st subscriber: 5 (after 6s)
// 2nd subscriber: 5
// 1st subscriber: 6
// 2nd subscriber: 6
// 1st subscriber: 7
// 2nd subscriber: 7

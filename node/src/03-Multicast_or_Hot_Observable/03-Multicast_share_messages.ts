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


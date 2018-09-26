import { ConnectableObservable, interval } from "rxjs";
import { map, publish, refCount, tap } from "rxjs/operators";

// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
//
// Warm observables have the following properties:
//
// - they are cold because they start producing values only after a subscription is active.
// - they are hot because the data is shared among all the subscribers.

const o$ = interval(1000).pipe(
    map(() => Date.now()),
    tap(date => console.log("new value: " + date)),
    publish(),
    refCount()
);

// publish() + refCount() make the observable "Warm": 
// it will start producing values when the first observable subscribes.
//
// - publish() make the observable multicast.
// - refCount() will call ConnectedObservable.connect() when we add the first subscription.

setTimeout(
    () => o$.subscribe(msg => console.log("1st subscriber: " + msg)),
    3000);

// when the second observable subscribe it will start receiving new messages,
// older messages are forever gone.
setTimeout(
    () => o$.subscribe(msg => console.log("2nd subscriber: " + msg)),
    6000);

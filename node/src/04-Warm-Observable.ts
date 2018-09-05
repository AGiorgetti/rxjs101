import { ConnectableObservable, interval } from "rxjs";
import { map, publish, refCount, tap } from "rxjs/operators";

// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables

// Warm observables are a special kinds of observables:
// they are cold because they start producing values only after a subscription is active.
// they are hot because the data is shared among all the subscribers.


const o = interval(1000).pipe(
    map(() => Date.now()),
    tap(() => console.log("new value")),
    publish(),
    refCount()
);

// publish() + refCount() make the observable "warm": it will start producing values when we've got the first subscribe.
// refCount() will call ConnectedObservable.connect() when we add the first subscription.

setTimeout(
    () => o.subscribe(v => console.log("1st subscriber: " + v)),
    3000);

setTimeout(
    () => o.subscribe(v => console.log("2nd subscriber: " + v)),
    6000);

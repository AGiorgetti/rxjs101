import { Observable, ConnectableObservable, interval } from "rxjs";
import { publish } from "rxjs/operators";

// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
//
// Hot observables (such as mouse move events, a web socket or stock tickers) 
// are already producing values even before a subscription is active. 
//
// When an observer subscribes to a hot observable sequence, 
// it will get all values in the stream that are emitted after it subscribes.
//
// The hot observable sequence IS SHARED among all subscribers,
// and each subscriber is pushed the next value in the sequence.
//
// The producer will keep going emitting values whether there's a subscriber or not.
//
// HOT is when your observable closes over the producer.

const o = new Observable<number>(subscriber => subscriber.next(Date.now()))
    .pipe(
        publish() // creates a ConnectedObservable: it shares the subscription to the underlying source
    ) as ConnectableObservable<number>; // there's an issue about type inference not working: https://github.com/ReactiveX/rxjs/issues/2972

// calling connect will "trigger" the subscription to the original observable source
o.connect(); // nothing will be displayed if we call connect() and activate the observable here, we subscribe a little bit too late.

o.subscribe(v => console.log("1st subscriber: " + v));
o.subscribe(v => console.log("2nd subscriber: " + v));

// o.connect(); // we'll see the same value for all the observables if we activate it here









// ---------------------------------------------------------------------------------------
/*

// an hot observable is shared among all the subscribers

const o2 = interval(1000)
    .pipe(
        publish()
    ) as ConnectableObservable<number>;

o2.connect();

setTimeout(() => {
    o2.subscribe(v => console.log("1st subscriber: " + v));
}, 3000);

setTimeout(() => {
    o2.subscribe(v => console.log("2nd subscriber: " + v));
}, 6000);

*/

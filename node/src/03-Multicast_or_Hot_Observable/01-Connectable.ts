import { connectable, Observable, Subject } from "rxjs";

// Old docs: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
//
// Multicast (or Hot) observables (such as mouse events, a web socket or stock tickers) 
// are already producing values even before a subscription is active. 
//
// When an observer subscribes to a Multicast / Hot observable sequence,
// it will get all values in the stream that are emitted after it subscribes.
//
// The Multicast / Hot Observable sequence IS SHARED among all subscribers,
// and each subscriber is pushed the same next value in the sequence; 
//
// The producer will keep going emitting values whether there's a subscriber or not.
//
// "Subject" is the only way we can Multicast in rxjs, 
// is there a way to make an Observable multicast ?
//
// connectable(): creates an observable that Multicasts once .connect() is called.

const o$ = connectable(
    new Observable<number>(subscriber => {
        console.log("a new message is about to be emitted");
        subscriber.next(Date.now());
    }),
    {
        connector: () => new Subject()
    });

// calling connect() will "trigger" the subscription to the original observable source
o$.connect(); // nothing will be displayed if we call connect() and activate the observable here, we subscribe a little bit too late.

// Output:
//
// a new message is about to be emitted
// (nothing)

o$.subscribe(v => console.log("1st subscriber: " + v));
o$.subscribe(v => console.log("2nd subscriber: " + v));

// o$.connect(); // we'll see the same value for all the observables if we activate it here

// Output:
//
// a new message is about to be emitted
// 1st subscriber: 1543146782246 (same message for all)
// 2nd subscriber: 1543146782246

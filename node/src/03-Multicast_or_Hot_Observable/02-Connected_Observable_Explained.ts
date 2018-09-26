import { ConnectableObservable, Observable, Subject } from "rxjs";
import { multicast } from "rxjs/operators";

// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
//
// Multicast (or Hot) observables (such as mouse events, a web socket or stock tickers) 
// are already producing values even before a subscription is active. 
//
// When an observer subscribes to a Multicast / Hot observable sequence
// it will get all values in the stream that are emitted after it subscribes.
//
// The Multicast / Hot observable sequence IS SHARED among all subscribers,
// and each subscriber is pushed the same next value in the sequence; 
//
// The producer will keep going emitting values whether there's a subscriber or not.
//
// a Subject is the only way we can Multicast in rxjs, 
// so how can we make an Observable multicast?

// what publish does under the hood:

const o2$ = new Observable<number>(subscriber => subscriber.next(Date.now()))
    .pipe(
        multicast(new Subject()) // creates a ConnectedObservable: it creates and underlying Subject and shares it with the new subscribers
    ) as ConnectableObservable<number>; // there's an issue about type inference not working: https://github.com/ReactiveX/rxjs/issues/2972

// .subscribe() will subscribe to the internal Subject
o2$.subscribe(v => console.log("1st subscriber: " + v));
o2$.subscribe(v => console.log("2nd subscriber: " + v));

// will subscribe the Subject to the source Observable triggering the execution
o2$.connect();

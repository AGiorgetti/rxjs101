import { Observable, interval } from "rxjs";

// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
//
// Observables are Unicast (or Cold): each subscribed observer "owns" an independent execution
//                                    of the Observable.
// 
// Unicast/Cold observables start running upon subscription: 
// the observable starts emitting values only after .subscribe() is called. 
//
// Values are also not shared among subscribers, each subscriber gets its own execution 
// environment and its own messages.
//
// Unicast/Cold is when your observable creates the producer.

const o1$ = new Observable<number>(subscriber => subscriber.next(1));

o1$.subscribe(msg => console.log("1st subscriber: " + msg));
o1$.subscribe(msg => console.log("2nd subscriber: " + msg));

const o2$ = new Observable<number>(subscriber => subscriber.next(Date.now()));

o2$.subscribe(msg => console.log("1st subscriber: " + msg));
o2$.subscribe(msg => console.log("2nd subscriber: " + msg));

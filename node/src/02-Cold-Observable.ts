import { Observable, interval } from "rxjs";

// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
//
// Cold observables start running upon subscription, i.e.: 
// the observable sequence only starts pushing values to the observers when Subscribe is called. 
//
// Values are also not shared among subscribers.
//
// COLD is when your observable creates the producer.
//
// Cold Observables are NOT SHARED between subscribers, they are unicast.

const o = new Observable<number>(subscriber => subscriber.next(Date.now()));

o.subscribe(v => console.log("1st subscriber: " + v));
o.subscribe(v => console.log("2nd subscriber: " + v));

const o2 = new Observable<number>(subscriber => subscriber.next(1));

o2.subscribe(v => console.log("1st subscriber: " + v));
o2.subscribe(v => console.log("2nd subscriber: " + v));











// ---------------------------------------------------------------------------------------
/*

// interval() produces a Cold observable

const o2 = interval(1000);

setTimeout(
    () => o2.subscribe(v => console.log("1st subscriber: " + v)),
    3000
);

setTimeout(
    () => o2.subscribe(v => console.log("2nd subscriber: " + v)),
    6000
);

*/

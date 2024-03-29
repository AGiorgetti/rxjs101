import { Observable, interval } from "rxjs";

// An Observable is a stream of data;
// unlike a function, it can return multiple values over time,
// even asynchronously.

const o$ = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
    }, 1000);
});

const subscription = o$.subscribe(v => console.log("subscriber: " + v));

console.log(`is the observable active? ${!subscription.closed}`);

setTimeout(() => {
    console.log(`is the observable active? ${!subscription.closed}`);
}, 3000);

// Output:
//
// subscriber: 1
// subscriber: 2
// is the observable active? true
// subscriber: 3 (after 1s)

// Or use a builtin `creation operator` to create an Observable that
// emits an infinite sequence of numbers over time.

const o2$ = interval(1000);

o2$.subscribe(v => console.log("interval subscriber: " + v));

// Output:
//
// interval subscriber: 0
// interval subscriber: 1
// interval subscriber: 2
// interval subscriber: 3
// ...

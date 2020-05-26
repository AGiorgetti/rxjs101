import { Subject, ConnectableObservable } from "rxjs";
import { tap, share, publish, map } from "rxjs/operators";

// A Subject is a Multicast / Hot Observable...
// But beware of the .pipe()! it will make it unicast / cold again!

let idx = 0;
const s$ = new Subject<number>();
// the pipe() operator make the subject Cold
const o$ = s$.pipe(
    tap(arg => console.log("tap: " + arg + " tap called: " + ++idx + " times")),
    map(arg => {
        console.log("very conmputationally expensive operation!");
        return arg * 10;
    }),
    // publish() // <- use the publish() operator to make it hot!
) // as ConnectableObservable<number>;

s$.next(1);
s$.next(2);

// o$.connect();

o$.subscribe(data => console.log("subscriber 1: " + data));
o$.subscribe(data => console.log("subscriber 2: " + data));

s$.next(3);
s$.next(4);

// Output: (without publish())
//
// tap: 1          (the side effect is executed for each message for each subscriber)
// subscriber 1: 3
// tap: 2
// subscriber 2: 3
// tap: 3
// subscriber 1: 4
// tap: 4
// subscriber 2: 4

// Output: (with publish())
//
// tap: 1          (the side effect is executed once per message)
// subscriber 1: 3
// subscriber 2: 3
// tap: 2
// subscriber 1: 4
// subscriber 2: 4

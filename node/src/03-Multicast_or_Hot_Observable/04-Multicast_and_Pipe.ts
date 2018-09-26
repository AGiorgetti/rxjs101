import { Observable, ConnectableObservable, interval, Subject } from "rxjs";
import { publish, tap, share } from "rxjs/operators";

// A Subject is a Multicast / Hot Observable...
// But beware of the .pipe()! it will make it unicast / cold again!

let idx = 0;
const s$ = new Subject<number>();
const o$ = s$.pipe(
    tap(data => console.log("tap: " + idx++)),
    // share() // <- use the share() operator to make it hot!
);

s$.next(1);
s$.next(2);

o$.subscribe(data => console.log("subscriber 1:" + data));
o$.subscribe(data => console.log("subscriber 2:" + data));

s$.next(3);
s$.next(4);

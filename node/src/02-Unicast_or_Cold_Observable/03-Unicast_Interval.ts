import { Observable, interval } from "rxjs";

// interval() (and many other construction operators) produces a Unicast/Cold Observable

const interval$ = interval(1000);

setTimeout(
    () => interval$.subscribe(msg => console.log("1st subscriber: " + msg)),
    3000
);

setTimeout(
    () => interval$.subscribe(msg => console.log("2nd subscriber: " + msg)),
    6000
);


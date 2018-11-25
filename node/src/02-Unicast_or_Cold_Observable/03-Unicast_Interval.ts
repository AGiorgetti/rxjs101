import { interval } from "rxjs";

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

// Output:
//
// 1st subscriber: 0 (after 3s)
// 1st subscriber: 1
// 1st subscriber: 2
// 2nd subscriber: 0 (after 6s)
// 1st subscriber: 3
// 2nd subscriber: 1
// 1st subscriber: 4
// 2nd subscriber: 2
// 1st subscriber: 5

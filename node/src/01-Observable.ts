import { Observable, interval } from "rxjs";

// creates a new Observable
//
// the constructor argument is the function that is called when the Observable is
// initially subscribed to.
// 
// This function is given a Subscriber to which:
//
// - new values can be `next`ed.
// - an `error` method can be called to raise an error.
// - `complete` can be called to notify of a successful completion.

const o = new Observable<number>(subscriber => subscriber.next(1));

o.subscribe(v => console.log("1st subscriber: " + v));
o.subscribe(v => console.log("2nd subscriber: " + v));

/*

// an observable is a stream of data

const o2 = interval(1000);

o2.subscribe(v => console.log("1st subscriber: " + v));
o2.subscribe(v => console.log("2nd subscriber: " + v));

*/

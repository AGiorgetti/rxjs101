import "rxjs";
import { Observable } from "rxjs";

// Creates a new Observable
//
// The constructor argument is the function that is called when the Observable is
// initially subscribed to. This function is given a Subscriber, to which new values
// can be `next`ed, or an `error` method can be called to raise an error, or
// `complete` can be called to notify of a successful completion.

const o = new Observable(subscriber => subscriber.next(1));

o.subscribe(v => console.log("1st subscriber: " + v));
o.subscribe(v => console.log("2nd subscriber: " + v));

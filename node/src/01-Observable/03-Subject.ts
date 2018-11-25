import { Observable, interval, Subscriber, Subject } from "rxjs";

// a Subject is special type of Observable.
// a Subject is the only way to Multicast a message to several subscribers.
// the Subject does not create a new execution for any observer that subscribes.
//
// Subjects are like EventEmitters: they maintain a registry of many listeners
// (it's a true implementation of the Observer pattern)
//
// The subject has the following methods:
// - `next` can be called to emit new values that will be consumed.
// - `error` can be called to raise an error.
// - `complete` can be called to notify of a successful completion.
// - `subscribe` creates a subscription for a data consumer.
//
// Subjects can emit data even of there's no active subscriptions, the data will
// simply be lost because noone listen to it.

const s$ = new Subject<number>();
s$.next(1); // if noone is listening the message is lost
s$.subscribe(v => console.log("1st subscriber: " + v));
s$.subscribe(v => console.log("2nd subscriber: " + v));
s$.next(2);

// Output:
//
// 1st subscriber: 2
// 2nd subscriber: 2

// There are also some specialization of the Subject class:
// - BehaviorSubject: keeps the current value and replays it to the new subscribers
// - RelaySubject: records multiple values form the observable execution and replays them to the new subscribers
// - AsyncSubject: send only the last value of the observable execution only when the obsrvable completes

// for detailed information on Subjects and how Multicast works: 
// https://rxjs-dev.firebaseapp.com/guide/subject

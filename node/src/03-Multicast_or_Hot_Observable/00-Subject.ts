import { Subject } from "rxjs";

// "Subject" is special type of Observable.
// "Subject" is the only way to Multicast a message to several subscribers.
//
// The Subject does not create a new execution for any observer that subscribes.
//
// Subjects are like EventEmitters: they maintain a registry of many listeners
// (it's a true implementation of the Observer pattern).
//
// The subject has the following methods:
// - `next()` can be called to emit new values that will be consumed.
// - `error()` can be called to raise an error.
// - `complete()` can be called to notify of a successful completion.
// - `subscribe()` creates a subscription for a data consumer.
//
// Subjects can emit data even of there's no active subscriptions, the data will
// simply be lost because noone listen to it.
//
// It's even more evident if we use a complex message

class Message {
    private static idx = 0;
    
    public id: number;

    constructor() {
        Message.idx++;
        this.id = Message.idx;
        console.log(`Message constructed with id: ${this.id}`);
    }
}

const o$ = new Subject<Message>();

o$.subscribe(msg => console.log("1st subscriber: " + JSON.stringify(msg)));
o$.subscribe(msg => console.log("2nd subscriber: " + JSON.stringify(msg)));

o$.next(new Message());

// Output:
//
// Message constructed with id: 1
// 1st subscriber: {"id":1}
// 2nd subscriber: {"id":1}

import { Observable } from "rxjs";

// Old docs: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables
//
// Observables are Unicast (or Cold): each subscribed observer "owns" an independent execution
//                                    of the Observable.
//
// Unicast/Cold observables start running upon subscription: 
// the observable starts pushing values to the observer only after .subscribe() is called. 
//
// Values are also not shared among subscribers, each subscriber gets its own execution 
// environment and its own messages.
//
// An Observable is Unicast/Cold when it creates a new producer for every subscription.
//
// It's even more evident if we use a complex message:

class Message {
    private static idx = 0;

    public id: number;

    constructor() {
        Message.idx++;
        this.id = Message.idx;
        console.log(`Message constructed with id: ${this.id}`);
    }
}

const o$ = new Observable<Message>(subscriber => subscriber.next(new Message()));

o$.subscribe(msg => console.log("1st subscriber: " + JSON.stringify(msg)));
o$.subscribe(msg => console.log("2nd subscriber: " + JSON.stringify(msg)));

// Output:
//
// Message constructed with id: 1
// 1st subscriber: {"id":1}
// Message constructed with id: 2
// 2nd subscriber: {"id":2}

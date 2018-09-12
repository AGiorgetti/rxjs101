# rxjs

RxJS is a library for [reactive programming](https://www.reactivemanifesto.org/) using Observables and the Observer pattern.

[The Reactive Manifesto](https://www.reactivemanifesto.org/)

The essential concepts in RxJS which solve async event management are:

- Observable: represents the idea of an invokable collection of future values or events.
- Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
- Subscription: represents the execution of an Observable, it is primarily useful for cancelling the execution.
- Operators: are pure functions that enable a functional programming style of coding (operations like map, filter, concat, reduce, etc.).
- Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or interval, etc.

To keep things simple we can think of an Observable like a stream of data that keep coming over time.

We have operators to inspect, alter, transform the stream or the data that keep coming out of it.

# Documentation

The sample is based on rxjx 6+

[rxjs GitHub](ttps://github.com/ReactiveX/rxjs)
[rxjs documentation](https://rxjs-dev.firebaseapp.com/)
[rxjs marbles](http://rxmarbles.com/)
[learn rxjs](https://www.learnrxjs.io/)
[old rxjs documentation](http://reactivex.io/rxjs/manual/overview.html)

# Compile the Samples

move to the folder: .\node

run:

    tsc -w

# Run the Samples

to run the compiled samples:

open a command prompt and run

    node .\out-tsc\sampleName.js

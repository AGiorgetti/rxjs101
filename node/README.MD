# RxJS

[RxJS](https://github.com/ReactiveX/rxjs) is a library for [Reactive Programming](https://www.reactivemanifesto.org/) using Observables and a sligthly modified [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern).

[The Reactive Manifesto](https://www.reactivemanifesto.org/)

The essential concepts in RxJS used to solve the "async" event management problem are:

- __Observable__: represents the idea of an invokable collection of future values or events; we can think of an Observable like a stream of data that keep coming over time.
- __Observer__: is a collection of callbacks that knows how to listen to values delivered by the Observable.
- __Subscription__: represents the execution of an Observable, it is primarily used for cancelling the execution; the term is also used to indicate the lazy computation that happens for each observer that subscribes.
- __Operators__: pure functions that enable a functional programming style of coding (operations like map, filter, concat, etc.).
- __Subject__: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- __Schedulers__: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or interval, etc.

To keep things simple we can think of an Observable like a stream of data that keep coming over time.

We also have operators to inspect, alter and transform the stream or the data that keep coming out of it.

RxJS implements a modified Observer Pattern because:
in the Observer Pattern the Subject maintains a list of its observers, this is not true with an `Observabe`, that do not track its subscriptions.

Only the `Subject` is actually a real implementation of the observer pattern, because it tracks all its subscribers.

## Documentation

The sample is based on rxjx 7+

- [RxJS GitHub](https://github.com/ReactiveX/rxjs)
- [RxJS documentation](https://rxjs-dev.firebaseapp.com/)
- [RxJS marbles](http://rxmarbles.com/)
- [Learn RxJS](https://www.learnrxjs.io/)
- [Old RxJS documentation](http://reactivex.io/rxjs/manual/overview.html)

## Compile the Samples

move to the folder: .\node

open a command propmpt and type:

```bash
npm install
tsc -w
```

## Run the Samples

to run the compiled samples open a command prompt and type:

```bash
node .\out-tsc\sampleName.js
```
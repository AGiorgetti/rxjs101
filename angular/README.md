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

RxJS have operators to inspect, alter, transform the stream or the data that keep coming out of it.

## Documentation

The sample is based on rxjx 6+

[rxjs GitHub](ttps://github.com/ReactiveX/rxjs)
[rxjs documentation](https://rxjs-dev.firebaseapp.com/)
[rxjs marbles](http://rxmarbles.com/)
[learn rxjs](https://www.learnrxjs.io/)
[old rxjs documentation](http://reactivex.io/rxjs/manual/overview.html)

## Rxjs101

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

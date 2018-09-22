import { of, interval, Subject } from "rxjs";
import { take } from "rxjs/operators";

/**
 * when you should unsubscribe ?
 */

{
    // 1- Explicit Unsubscribe
    console.log('* Explicit Unsubscribe');

    const interval$ = interval(1000);
    const subscription = interval$.subscribe(
        data => console.log(`timer: ${data}`)
    );
    console.log(`was the subscription closed? ${subscription.closed}`);
    subscription.unsubscribe();
    console.log(`was the subscription closed? ${subscription.closed}`);
    console.log('We unsubscribed before the timer could emit it\' first tick');
}

{
    // 2- Completed Observable
    console.log('* Completed Observable');

    // There's no need to unsubscribe to "completed" observable.
    // Once the observable completes, all the subscription will be removed.

    const source$ = of("single data"); // sync observable that completes after emitting the value

    const subscription = source$.subscribe(data => console.log(data));
    console.log(`was the subscription closed? ${subscription.closed}`);
    console.log('if "true" there\'s not need to unsubscribe.');
}

{
    // 3- Completed with Error
    console.log('* Error Observable');

    // An error also completes the Observable and kills subscriptions.    
    const source$ = new Subject();
    const subscription = source$.subscribe(() =>{}, data => console.log(data));
    source$.error("error!");

    console.log(`was the subscription closed? ${subscription.closed}`);
    console.log('if "true" there\'s not need to unsubscribe.');
}

{
    // 4- Use Operatos that call Complete or Stop the observable
    console.log('* Operators that call Complete')
    // some of them:
    // - take(n): emits N values before stopping the observable.
    // - takeWhile(predicate): tests the emitted values against a predicate, if it returns `false`, it will complete.
    // - takeUntil (predicate): tests the emitted values against a predicate, if it returns `true`, it will complete.
    // - first(): emits the first value and completes.
    // - first(predicate): checks each value against a predicate function, if it returns `true`, the emits that value and completes.
    // - toPromise(): convertsthe observable in a promise.
    const interval$ = interval(1000);
    const subscription = interval$
        .pipe(
            take(3)
        )
        .subscribe(data => {
            console.log(`timer: ${data}`);
        });
    console.log(`was the subscription closed? ${subscription.closed}`);
    // just wait some more before checking the subscription
    setTimeout(
        () => console.log(`was the subscription closed? ${subscription.closed}`),
        4000);
}


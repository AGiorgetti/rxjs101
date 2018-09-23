import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take, takeUntil } from 'rxjs/operators';

/**
 * Unsubscribe is a "MUST DO!" operation to avoid memory leaks and bugs.
 *
 * you have several ways of doing it:
 *
 * 1- AsyncPipe - Angular will take care of unsubscribing when the component is destroyed
 * 2- Subscription.unsubscribe() - Call the unsubscribe() method imperatively for any subscription created in code
 * 3- Use rxjs operators that automatically unsubscribe: take, takeUntill, etc...
 *
 * Angular Best Practice:
 * - use the actions combined of a Subject and the takeUntil() operator
 * - create an instance member: private onDestroy$ = new Subject();
 * - use this subject with your Observables: this.http.get().takeUntil(this.onDestroy$).subscribe(…)
 * - emit a value in the ngOnDestroy method: this.onDestroy$.next();
 * - complete the observable in the ngOnDestroy method: this.onDestroy.complete();
 *
 * there's a small library that does just that:
 * https://www.npmjs.com/package/@w11k/ngx-componentdestroyed
 *
 * @export
 * @class O05UnsubscribeComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-o05-unsubscribe',
  templateUrl: './o05-unsubscribe.component.html',
  styleUrls: ['./o05-unsubscribe.component.css']
})
export class O05UnsubscribeComponent implements OnInit, OnDestroy {

  public items$: Observable<any>;

  public items_explicit: any[];
  public items_explicit_subscription: Subscription;

  public items_take_unsubscribe: any[];

  // Best Practice
  public items_best_practice: any[];
  private onDestroy$ = new Subject<boolean>();

  constructor(
    http: HttpClient
  ) {
    // 1- AsyncPipe binding
    this.items$ = http.get('./assets/database.json').pipe(
      map((result: any) => result != null ? result.items : null)
    );

    // 2- explicit subscription: must be manually unsunscribed dusing OnDestroy
    this.items_explicit_subscription = http.get('./assets/database.json').pipe(
      map((result: any) => result != null ? result.items : null)
    ).subscribe(data => this.items_explicit = data);

    // 3- rxjs operator that unsubscribe()
    http.get('./assets/database.json').pipe(
      map((result: any) => result != null ? result.items : null),
      take(1)
    ).subscribe(data => this.items_take_unsubscribe = data);

    // Best Practice
    http.get('./assets/database.json').pipe(
      map((result: any) => result != null ? result.items : null),
      takeUntil(this.onDestroy$)
    ).subscribe(data => this.items_best_practice = data);

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.items_explicit_subscription != null) {
      this.items_explicit_subscription.unsubscribe();
    }

    // Best Practice
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }


}

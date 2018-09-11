import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, share, publish, refCount, publishLast, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-o03-hot-observable',
  templateUrl: './o03-hot-observable.component.html',
  styleUrls: ['./o03-hot-observable.component.css']
})
export class O03HotObservableComponent implements OnInit {

  public items$: Observable<any>;
  public lateItems$: Observable<any>;

  constructor(
    http: HttpClient
  ) {
    this.items$ = http.get('./assets/database.json').pipe(
      map((result: any) => result != null ? result.items : null),
      /*
      publish(),
      refCount() // make this observable hot
      */
      // share()
      // shareReplay(1)
    );

    // 3rd subscriber will not display anything (will only get new values)
    setTimeout(() => this.lateItems$ = this.items$, 3000);
  }

  ngOnInit() {
  }

}

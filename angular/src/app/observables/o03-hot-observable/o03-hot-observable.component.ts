import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, share, shareReplay } from 'rxjs/operators';
import { IDatabase, IItem } from '../model';

@Component({
  selector: 'app-o03-hot-observable',
  templateUrl: './o03-hot-observable.component.html',
  styleUrls: ['./o03-hot-observable.component.css']
})
export class O03HotObservableComponent implements OnInit {

  public items$: Observable<IItem[]>;
  public lateItems$: Observable<IItem[]> | null = null;

  constructor(
    http: HttpClient
  ) {
    this.items$ = http.get<IDatabase>('./assets/database.json')
      .pipe(
        map((result: any) => result != null ? result.items : null),
        // make this observable hot
        // experiment uncommenting the following code
        // share()
        // shareReplay(1)
      );

    // if the Observable is a Multicast the 3rd subscriber will
    // not display anything (will only get new values)
    setTimeout(() => this.lateItems$ = this.items$, 10000);
  }

  ngOnInit() {
  }

}

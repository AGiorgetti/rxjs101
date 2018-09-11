import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-o02-to-promise',
  templateUrl: './o02-to-promise.component.html',
  styleUrls: ['./o02-to-promise.component.css']
})
export class O02ToPromiseComponent implements OnInit {

  public items$: Promise<any>;

  constructor(
    http: HttpClient
  ) {
    this.items$ = http.get('./assets/database.json').pipe(
      map((result: any) => result != null ? result.items : null)
    ).toPromise();
  }


  ngOnInit() {
  }

}

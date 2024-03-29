import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDatabase, IItem } from '../model';

@Component({
  selector: 'app-o02-to-promise',
  templateUrl: './o02-to-promise.component.html',
  styleUrls: ['./o02-to-promise.component.css']
})
export class O02ToPromiseComponent implements OnInit {

  public items: Promise<IItem[]>;

  constructor(
    http: HttpClient
  ) {
    this.items = firstValueFrom(http.get<IDatabase>('./assets/database.json')
      .pipe(
        map((result: any) => result != null ? result.items : null)
      )
    );
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IDatabase } from '../model';

@Component({
  selector: 'app-o01-cold-observables',
  templateUrl: './o01-cold-observables.component.html',
  styleUrls: ['./o01-cold-observables.component.css']
})
export class O01ColdObservablesComponent implements OnInit {

  public items$: Observable<any>;

  constructor(
    http: HttpClient
  ) {
    this.items$ = http.get<IDatabase>('./assets/database.json')
      .pipe(
        map(result => result != null ? result.items : null)
      );
  }

  ngOnInit() {
  }

}

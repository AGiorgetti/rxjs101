import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cold_items$: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.cold_items$ = http.get('./assets/database.json').pipe(
      map((result: any) => result != null ? result.items : null)
    );
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { O01ColdObservablesComponent } from './observables/o01-cold-observables/o01-cold-observables.component';
import { O02ToPromiseComponent } from './observables/o02-to-promise/o02-to-promise.component';
import { O03HotObservableComponent } from './observables/o03-hot-observable/o03-hot-observable.component';
import { O04ShareComponent } from './observables/o04-share/o04-share.component';

@NgModule({
  declarations: [
    AppComponent,
    O01ColdObservablesComponent,
    O02ToPromiseComponent,
    O03HotObservableComponent,
    O04ShareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cold', component: O01ColdObservablesComponent },
      { path: 'topromise', component: O02ToPromiseComponent },
      { path: 'hot', component: O03HotObservableComponent },
      { path: 'share', component: O04ShareComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

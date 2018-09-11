import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-o04-share',
  templateUrl: './o04-share.component.html',
  styleUrls: ['./o04-share.component.css']
})
export class O04ShareComponent implements OnInit {

  notSharedSource$ = new BehaviorSubject({ name: 'not shared' });
  notShared$ = this.notSharedSource$.pipe(map(item => item.name));

  sharedSource$ = new BehaviorSubject({ name: 'shared' });
  shared$ = this.sharedSource$.pipe(map(item => item.name), share());

  sharedReplaySource$ = new BehaviorSubject({ name: 'sharedRelay' });
  sharedReplay$ = this.sharedReplaySource$.pipe(map(item => item.name), shareReplay(1));

  constructor() { }

  ngOnInit() {
  }

}

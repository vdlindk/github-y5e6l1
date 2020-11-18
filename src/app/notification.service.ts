import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  private readonly msg$ = new Subject<string>();
  readonly message$ = this.msg$.asObservable();

  constructor(private zone: NgZone) {}
  
  showMsg(msg: string) {
    this.zone.run(() => this.msg$.next(msg))
    ;
  }

  clearMsg() {
    this.msg$.next(null);
  }

}

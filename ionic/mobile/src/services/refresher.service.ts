import { AccountService } from './../util/account-service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
@Injectable()
export class RefresherService {
  refresher: Subject<any>

  constructor(
    private accountService: AccountService
  ) {
    this.refresher = new Subject();
    Observable.timer(1000, 90000).subscribe(data => {
      if (accountService.isLoggedIn()) {
        this.refresher.next(data);
      }
    })
  }

  refresh() {
    this.refresher.next(0);
  }

}
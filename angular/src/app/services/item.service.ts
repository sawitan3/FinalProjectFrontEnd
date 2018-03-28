import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ItemService {
  private subject = new Subject<any>();
  constructor() {
  }


  setItem(item:any) {
    this.subject.next(item);
  }

  clearItem() {
    this.subject.next();
  }

  getItem(): Observable<any> {
    return this.subject.asObservable();
  }
}

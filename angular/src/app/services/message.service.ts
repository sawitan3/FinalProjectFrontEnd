import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  constructor() {
    this.clearMessage();
  }
  sendMessage(type: string, message: any) {
    this.subject.next({type: type, text: message });
  }

  clearMessage() {
    this.subject.next({type:null, text:null});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

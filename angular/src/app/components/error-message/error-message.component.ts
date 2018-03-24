import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  someObject = {};
  msg: any = {};
  constructor(private message: MessageService) { }

  ngOnInit() {
    this.message.getMessage().subscribe(
      res => {
        let ret = res;
        this.someObject = ret.text;
        this.msg.classType = ret.type;
      }
    );
  }

}

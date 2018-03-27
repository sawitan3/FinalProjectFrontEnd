import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessageService} from './message.service';

@Injectable()
export class AuthService {
  data: any = {};

  header = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private rest: RestService,
    private router: Router,
    private message: MessageService
  ) { }

  login(body) {
    this.rest.post('/api/auth/login', body, this.header).subscribe(
      res => {
        this.data = res;
        localStorage.setItem('token', this.data.access_token);
        this.router.navigate(['/']);
      },
      err =>{
        let error = err.error;
        this.message.sendMessage('alert-danger', error);
      });
  }

  register(body) {
    this.rest.post('/api/auth/register', body, this.header).subscribe(
      res => {
        this.message.sendMessage('alert-success','register success');
    },
      err=>{
        let error = err.error;
        this.message.sendMessage('alert-danger', error);
      }
    );
  }
}

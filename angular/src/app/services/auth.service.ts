import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {RestService} from './rest.service';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessageService} from './message.service';
import {isPlatformBrowser} from "@angular/common";

@Injectable()
export class AuthService {
  data: any = {};

  header = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private rest: RestService,
    private router: Router,
    private message: MessageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  login(body) {
    if (isPlatformBrowser(this.platformId)) {
      this.rest.post('/api/auth/login', body, this.header).subscribe(
        res => {
          this.data = res;
          let name = JSON.parse(atob(this.data.access_token.split('.')[1])).name;

          localStorage.setItem('token', this.data.access_token);
          localStorage.setItem('name', name);
          this.router.navigate(['/']);
        },
        err => {
          let error = err.error;
          this.message.sendMessage('alert-danger', error);
        });
    }
  }

  register(body) {
    this.rest.post('/api/auth/register', body, this.header).subscribe(
      res => {
        this.message.sendMessage('alert-success',{'msg':'register success'});
    },
      err=>{
        let error = err.error;
        this.message.sendMessage('alert-danger', error);
      }
    );
  }
}

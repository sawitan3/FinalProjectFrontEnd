import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  data: any = {};
  constructor(private rest: RestService, private router: Router) { }

  login(body) {
    const header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.rest.post('/api/auth/login', body, header).subscribe(res => {
      this.data = res;
      localStorage.setItem('token', this.data.access_token);
      this.router.navigate(['/']);
    });
  }
}

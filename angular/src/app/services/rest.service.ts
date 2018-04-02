import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestService {
  url = 'http://localhost:8000';
  // url = 'https://api.hsy-store.cf';
  constructor(private http: HttpClient) {}

  get(route, header){
    return this.http.get<any>(this.url + route, header);
  }

  post(route, body, header){
    return this.http.post<any>(this.url + route, body, header);
  }o

  put(route, body, header){
    return this.http.put<any>(this.url + route, body, header);
  }

  delete(route, header){
    return this.http.delete<any>(this.url + route, header);
  }

  getWithoutBaseUrl(route, body){
    console.log(route);
    return this.http.post<any>(route,body);
  }
}

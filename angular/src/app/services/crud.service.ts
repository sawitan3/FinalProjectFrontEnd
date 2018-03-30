import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from './rest.service';
import {ItemService} from './item.service';

@Injectable()
export class CrudService {

  constructor(private rest: RestService, private router: Router, private data: ItemService) { }
  header = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
  })};

  post (route, body){
    return this.create(route, body);
  }

  get (route){
    return this.load(route);
  }

  load (route) {
    return this.rest.get(route, this.header);
  }

  create(route, body){
    return this.rest.post(route, body, this.header);
  }

  update(route, body){
    return this.rest.put(route, body, this.header);
  }

  delete(route){
    return this.rest.delete(route, this.header);
  }
}

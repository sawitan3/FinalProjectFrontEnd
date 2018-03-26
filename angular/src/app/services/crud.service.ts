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

  load(route, next){
    this.rest.get(route, this.header).subscribe(res =>{
      this.data = res;
    });
  }

  create(route, body){
    this.rest.post(route, body, this.header).subscribe(res =>{
      this.data = res;
    });
  }

  update(route, body){
    this.rest.put(route, body, this.header).subscribe(res =>{
      this.data = res;
    });
  }

  delete(route){
    this.rest.delete(route, this.header).subscribe(res =>{
      this.data = res;
    });
  }
}

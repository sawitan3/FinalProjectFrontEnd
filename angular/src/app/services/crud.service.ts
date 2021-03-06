import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from './rest.service';
import {ItemService} from './item.service';
import {isPlatformBrowser} from "@angular/common";

@Injectable()
export class CrudService {

  constructor(private rest: RestService, private router: Router, private data: ItemService,
              @Inject(PLATFORM_ID) private platformId: Object) { }
  getHeader(){
    if (isPlatformBrowser(this.platformId)) {
      return {headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })};
    }
  }

  post (route, body){
    return this.create(route, body);
  }

  get (route){
    return this.load(route);
  }

  load (route) {
    return this.rest.get(route, this.getHeader());
  }

  create(route, body){
    return this.rest.post(route, body, this.getHeader());
  }

  update(route, body){
    return this.rest.put(route, body, this.getHeader());
  }

  delete(route){
    return this.rest.delete(route, this.getHeader());
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CrudService} from "../../services/crud.service";
import {RestService} from "../../services/rest.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public params: any = {};
  public items: any = {};

  constructor(
    private route: ActivatedRoute,
    private crud: CrudService,
    private rest: RestService
  ) {}

  ngOnInit() {

    this.route.queryParamMap.subscribe(query => {
      this.params['q'] = query.get('q');
      this.params['t'] = query.get('t');
      this.crud.post('/api/search', JSON.stringify(this.params)).subscribe(res => {
        this.items = res;
      });
    });
  }

  getPage(link: any){
    this.rest.getWithoutBaseUrl(link, this.params).subscribe(res =>{
      this.items = res;
    });
  }

  addToCart(id: any){
    console.log(id);

  }
}

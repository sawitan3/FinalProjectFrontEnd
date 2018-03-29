import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CrudService} from "../../services/crud.service";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public params: any = {};
  public items: any;

  constructor(
    private route: ActivatedRoute,
    private crud: CrudService,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(query => {
      this.params['q'] = query.get('q');
      this.params['t'] = query.get('t');
    });

    this.crud.post('/api/search', JSON.stringify(this.params)).subscribe(res => {
      this.items = res;
    });
  }
}

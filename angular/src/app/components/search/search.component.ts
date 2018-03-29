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
    private item: ItemService
  ) {}


  getParam(name: string){
    let orig = document.location.search.substr(1);
    let parse = JSON.parse('{"' + decodeURI(orig)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g,'":"') + '"}'
    )
    return parse[name];
  }

  ngOnInit() {
    this.item.clearItem();
    this.params['q'] = this.getParam('q');
    this.params['t'] = this.getParam('t');

    this.crud.post('/api/search', JSON.stringify(this.params)).subscribe(res => {
      this.items = res;
      console.log(res);
    });
  }
}

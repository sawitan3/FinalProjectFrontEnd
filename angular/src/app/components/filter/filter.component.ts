import { Component, OnInit } from '@angular/core';
import {RestService} from "../../services/rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public params: any = {};
  public items: any = [];
  constructor(
    private route: ActivatedRoute,
    private crud: CrudService,
    private rest: RestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(query => {
      this.params['q'] = query.get('q');
      this.params['t'] = query.get('t');
      this.crud.post('/api/filter', JSON.stringify(this.params)).subscribe(res => {
        this.items = res;
        console.log(res);
      });
    });
  }

  getPage(link: any){
    this.rest.getWithoutBaseUrl(link, this.params).subscribe(res =>{
      this.items = res;
    });
  }

  addToCart(pid: any){
    this.router.navigate([`/product/${pid}`]);
  }
}

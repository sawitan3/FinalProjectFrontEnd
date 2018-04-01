import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bestProducts: any = {};

  constructor(
    private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.load('/api/product/topProduct').subscribe(res=>{
      this.bestProducts = res;
    });
  }

}

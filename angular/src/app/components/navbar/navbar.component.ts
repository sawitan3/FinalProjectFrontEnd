import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  navs: any = undefined;

  sel: number = undefined;

  constructor(
    private item: ItemService,
    private crud: CrudService
  ) {}

  ngOnInit() {
    this.crud.load('/api/menu');
    this.item.getItem().subscribe(res=>{
       this.navs = res;
    });
  }

}

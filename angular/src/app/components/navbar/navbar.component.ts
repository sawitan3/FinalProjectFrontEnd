import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {ItemService} from "../../services/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  navs: any = undefined;

  sel: number = undefined;

  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  get Name() {
    return localStorage.getItem('name');
  }

  constructor(
    private item: ItemService,
    private crud: CrudService,
    private router: Router
  ) {}

  ngOnInit() {
    this.crud.load('/api/menu');
    this.item.getItem().subscribe(res=>{
       this.navs = res;
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  loadTags( tags:any ){
    console.log(tags)
  }

}

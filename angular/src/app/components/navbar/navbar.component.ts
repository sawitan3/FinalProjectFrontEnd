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

  public q: string = undefined;
  public t: string = undefined;

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
<<<<<<< HEAD
    this.crud.load('/api/menu');
    this.item.getItem().subscribe(res => {
=======
    this.crud.load('/api/menu').subscribe(res=>{
>>>>>>> 67e5a17e4f14905d7c562f8c0e6509c0cd36bdf4
       this.navs = res;
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

<<<<<<< HEAD
  loadTags( tags: any ) {
    console.log(tags);
=======
  loadTags( tags: any ){
    this.router.navigate(['search'],{queryParams:{t:tags.join('+')}});
  }

  search(){
    this.router.navigate(['search'],{queryParams:{q:this.q}});
>>>>>>> 67e5a17e4f14905d7c562f8c0e6509c0cd36bdf4
  }

}

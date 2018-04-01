import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {ItemService} from "../../services/item.service";
import {Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";

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
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
  }

  get Name() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('name');
    }
  }

  constructor(
    private item: ItemService,
    private crud: CrudService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.crud.load('/api/menu').subscribe(res=>{
       this.navs = res;
    });
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
      this.router.navigate(['']);
    }
  }

  loadTags( tags: any ){
    this.router.navigate(['filter'],{queryParams:{t:tags.join('+')}});
  }

  search(){
    this.router.navigate(['search'],{queryParams:{q:this.q}});
  }

}

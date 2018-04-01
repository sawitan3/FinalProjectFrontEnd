import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../services/crud.service";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  msg: any = {};
  productData: any = {};
  colors: any =  [];
  sizes: any = [];
  choosen: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crud: CrudService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.crud.load(`/api/product?id=${res['id']}`).subscribe(ret=>{
        this.productData = ret;
        for(let sku of this.productData['skus']){
          if(this.colors.indexOf(sku['color']['hex']) == -1){
            this.colors.push(sku['color']['hex']);
          }
        }
        this.choosen = this.productData['skus'][0];
        this.loadSize();
      },err=>{
        this.msg = err;
      });
    });
  }
  loadSize(){
    for(let sku of this.productData['skus']){
      if(sku['color']['id']==this.choosen['color']['id']){
        this.sizes.push(sku['size']);
      }
    }
  }
  chooseColor(hex:any){
    this.sizes = [];
    for(let sku of this.productData['skus']){
      if(sku['color']['hex']==hex){
          this.choosen = sku;
          break;
        }
      }
      this.loadSize();
    }
  chooseSize(id:any){
    // console.log(id);
    for(let sku of this.productData['skus']){
      if(sku['color']['id']==this.choosen['color']['id'] && sku['size']['id']==id){
        this.choosen=sku;
        break;
      }
    }
    // console.log(this.choosen);
  }
  addToCart(){
    this.crud.post('/api/cart',this.choosen).subscribe(res=>{
      this.message.sendMessage('alert-success',res);
    },err=>{
      this.router.navigate(['/login']);
    });
  }
}

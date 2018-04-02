import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   selected_address = 1;
   addresses: any = [];
   cart_items: any = [];

  get total() {
    return this.cart_items.reduce( (acc, val) => acc + val.sku.price * val.qty, 0);
  }

  constructor(
    private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.load('/api/cart').subscribe(res=>{
      this.cart_items = res;
      // console.log(res);
    });
    this.crud.load('/api/user/address').subscribe(res=>{
      this.addresses = res;
    });
  }

  selectAddress(e){
    // console.log(e.target.value);
    this.selected_address = e.target.value;
  }

  checkout(){
    // console.log('haha');
    this.crud.update('/api/cart',this.cart_items);
    let payload : any = {'address_id':this.selected_address};
    this.crud.post('/api/transaction/create', payload).subscribe(res=>{
      window.location.href = res['redirect'];
    });
    // this.crud.post('/api/test')
  }
}

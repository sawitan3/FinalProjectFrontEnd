import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   selected_address = 0;
   addresses: any = [
     {
       id: 0,
       user_id: '3cc2d41c-34bc-11e8-a6ef-9cd21efccb51',
       entry_name: 'alamat kos',
       phone_number: '23042',
       address: 'A very long long address in a district with a long name. In a city with a long name.'
     }
   ];
   cart_items: any = [
    {
      SKU: {
        id: 1,
        product_id: 1,
        color: {
          id: 1,
          name: 'red',
        },
        size: {
          id: 1,
          name: '42'
        },
        code: 'KTDG-42-12-13',
        price: 3500,
        stock: 3,
        fullname: 'Kratingdaeng Hitam',
        image: {
          small: 'https://loremflickr.com/128/128/addidas',
          medium: 'https://loremflickr.com/256/256/addidas',
          large: 'https://loremflickr.com/512/512/addidas'
        }
      },
      qty: 5
    },
    {
      SKU: {
        id: 1,
        product_id: 1,
        color: {
          id: 1,
          name: 'red',
        },
        size: {
          id: 1,
          name: '42'
        },
        code: 'KTDG-42-12-13',
        price: 3500,
        stock: 3,
        fullname: 'Kratingdaeng Hitam',
        image: {
          small: 'https://loremflickr.com/128/128/addidas',
          medium: 'https://loremflickr.com/256/256/addidas',
          large: 'https://loremflickr.com/512/512/addidas'
        }
      },
      qty: 5
    }
  ];

  get total() {
    return this.cart_items.reduce( (acc, val) => acc + val.SKU.price, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}

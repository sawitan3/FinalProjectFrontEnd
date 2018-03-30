import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productData: any = [
      {
        id: 1,
          name: 'Blue Adidas',
          price: 2000000,
          desc: 'New Adidas shoe that comes in blue!',
          image: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/' +
          'Sites-adidas-products/en_US/dw6be65a6a/zoom/DA9618_01_standard.jpg?sh=840&strip=false&sw=840'
      }
  ];
  constructor() { }

  ngOnInit() {
  }

}

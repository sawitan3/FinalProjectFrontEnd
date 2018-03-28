import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bestProducts: any = [
      {
          image: 'https://static.shop.adidas.co.id/media/catalog/product/cache' +
          '/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/C/Q/CQ2444_SL_eCom.jpg',
          title: 'Blue Adidas',
          desc: 'Your New Blue'
      },
      {
          image: 'https://static.shop.adidas.co.id/media/catalog/product/cache' +
          '/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/C/Q/CQ2444_SL_eCom.jpg',
          title: 'Blue Adidas',
          desc: 'Your New Blue'
      },
      {
          image: 'https://static.shop.adidas.co.id/media/catalog/product/cache' +
          '/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/C/Q/CQ2444_SL_eCom.jpg',
          title: 'Blue Adidas',
          desc: 'Your New Blue'
      },
      {
          image: 'https://static.shop.adidas.co.id/media/catalog/product/cache' +
          '/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/C/Q/CQ2444_SL_eCom.jpg',
          title: 'Blue Adidas',
          desc: 'Your New Blue'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}

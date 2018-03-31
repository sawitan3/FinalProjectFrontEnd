import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productData: any = {
      id: 1,
      name: 'Product Name',
      short_desc: 'A short written description with an unknown purpose',
      long_desc: 'This is an example of a long description that we are going to show in the product page. This text is pretty pointless, but I don\t really care because it\'s just for sample data.',
      skus: [
        {
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
          image: [
            {
              small: 'https://loremflickr.com/128/128/addidas',
              medium: 'https://loremflickr.com/256/256/addidas',
              large: 'http://via.placeholder.com/500'
            },
            {
              small: 'https://loremflickr.com/128/128/addidas',
              medium: 'https://loremflickr.com/256/256/addidas',
              large: 'http://via.placeholder.com/500'
            },
            {
              small: 'https://loremflickr.com/128/128/addidas',
              medium: 'https://loremflickr.com/256/256/addidas',
              large: 'http://via.placeholder.com/500'
            }
          ]
        },
        {
          id: 1,
          product_id: 1,
          color: {
            id: 1,
            name: 'green',
          },
          size: {
            id: 1,
            name: '42'
          },
          code: 'KTDG-42-12-13',
          price: 3500,
          stock: 3,
          fullname: 'Kratingdaeng Hitam',
          image: [
            {
              small: 'https://loremflickr.com/128/128/addidas',
              medium: 'https://loremflickr.com/256/256/addidas',
              large: 'https://loremflickr.com/512/512/addidas'
            }
          ]
        }
      ]
    };

  colors: any =  [
    {
      name: 'Red',
      hex: 'ff0000'
    },
    {
      name: 'Green',
      hex: '00ff00'
    },
    {
      name: 'Blue',
      hex: '0000ff'
    },
    {
      name: 'Green',
      hex: '00ff00'
    },
    {
      name: 'Blue',
      hex: '0000ff'
    },
    {
      name: 'Green',
      hex: '00ff00'
    },
    {
      name: 'Blue',
      hex: '0000ff'
    },
    {
      name: 'Green',
      hex: '00ff00'
    },
    {
      name: 'Blue',
      hex: '0000ff'
    },
    {
      name: 'Green',
      hex: '00ff00'
    },
    {
      name: 'Blue',
      hex: '0000ff'
    },
    {
      name: 'Green',
      hex: '00ff00'
    },
    {
      name: 'Blue',
      hex: '0000ff'
    }
  ];

  sizes: any = [
    {
      name: '42'
    },
    {
      name: '43'
    },
    {
      name: '40'
    },
    {
      name: '43'
    },
    {
      name: '40'
    },
    {
      name: '43'
    },
    {
      name: '40'
    },
    {
      name: '43'
    },
    {
      name: '40'
    },
    {
      name: '43'
    },
    {
      name: '40'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

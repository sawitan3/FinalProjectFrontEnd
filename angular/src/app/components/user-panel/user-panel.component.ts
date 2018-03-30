import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  protected orders: any = [
    {
      id: 1,
      time: '2018-03-29 18:37:02',
      user_id: '012DF02B-CD83-4C57-A117-4BDC8E86DE0E',
      total: 3500,
      details: [
        {
          id: 1,
          header_id: 1,
          sku: {
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
            code: 'alskdflaksdfj',
            price: 3500,
            stock: 3,
            fullname: 'Kratingdaeng Hitam'
          },
          qty: 1,
          paid: 3500
        }
      ]
    }
  ];
  protected addresses: any = [
    {
      id: 0,
      entry_name: 'Rumah',
      phone_number: '14045',
      address: 'Jl. Hang Lekir No. 123, Rawa Jati, Dago, Jakarta Barat 12432'
    },
    {
      id: 0,
      entry_name: 'Kantor',
      phone_number: '14045',
      address: 'Jl. Hang Tuah No. 456, Rawa Buntu, Coblong, Jakarta Barat 1241'
    }
  ];
  public model: any = {};
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: any = [
    {
      title: 'Footer 1',
      items: [
        {text: 'Item 1', link: '#'},
        {text: 'Item 1', link: '#'},
        {text: 'Item 1', link: '#'}
      ]
    },
    {
      title: 'Footer 1',
      items: [
        {text: 'Item 1', link: '#'},
        {text: 'Item 1', link: '#'},
        {text: 'Item 1', link: '#'}
      ]
    }
  ];

  constructor () { }

  ngOnInit () {
  }

}

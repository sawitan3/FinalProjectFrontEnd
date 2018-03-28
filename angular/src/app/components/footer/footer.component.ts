import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: any = [
    {
      title: 'GET HELP',
      link: '#',
      items: [
        {text: 'Payment Options', link: '#'},
        {text: 'Contact Us', link: '#'},
        {text: 'Something', link: '#'}
      ]
    },
    {
      title: 'ABOUT US',
      link: 'about-us',
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

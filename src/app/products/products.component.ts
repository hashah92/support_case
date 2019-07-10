import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  headline:string="Top Products";
  cards_content:Array<any>= [
    {
      img: '../../assets/sneaker_1.jpg',
      title: 'Product 1',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    },
    {
      img: '../../assets/sneaker_2.jpg',
      title: 'Product 2',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    },
    {
      img: '../../assets/sneaker_3.jpg',
      title: 'Product 3',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    },
    {
      img: '../../assets/sneaker_4.jpg',
      title: 'Product 4',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    },
    {
      img: '../../assets/sneaker_5.jpg',
      title: 'Product 5',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    },
    {
      img: '../../assets/sneaker_2.jpg',
      title: 'Product 6',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

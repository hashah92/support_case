import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  headline:string="Top Products";
  cards_content:Array<any>= [
    {
      img: '../../assets/sneaker_5.jpg',
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
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

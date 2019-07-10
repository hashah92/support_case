import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  openMenu:boolean=false;
  menuItems:Array<any> = [
    {
      "title":'home',
      "url":''
    },
    {
      "title":'products',
      "url":'products'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  initSlide(){
    this.openMenu = !this.openMenu;
  }

  removeMenu(){
    this.openMenu = false;
  }

}

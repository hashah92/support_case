import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  mobile_title:String="Bolt Headline";
  headline:String="Headline";
  subtitle:String="Subtitle";
  cta_text:String="Shop";
  constructor() { }

  ngOnInit() {
  }

}

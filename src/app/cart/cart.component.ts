import { Component, OnInit } from '@angular/core';
import { hasParentInjector } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bolt:boolean=true;
  gift:boolean=true;
  paypal:boolean=true;
  affirm:boolean=true;
  isTermsAccepted:boolean=false;
  constructor() { }
  ngOnInit() {
    //This would be a good place to initialize DOM Variables and/or functions
  }
  boltCheckout(){
    //Here we will check if the terms checkbox is checked againsts the isTermsAccepted variable that we default initialized to false above.
    if(this.isTermsAccepted)
    {
      this.bolt = !this.bolt;
    }
  }
  giftCheckout(){
    //COMPLETE THIS FUNCTION
    // This function toggles the Gift Card overlay
    if(this.isTermsAccepted)
    {
    this.gift = !this.gift;
    }
  }
  paypalCheckout(){
    //COMPLETE THIS FUNCTION
    // This function toggles the paypal overlay
    if(this.isTermsAccepted)
    {
    this.paypal = !this.paypal;
    }
  }
  affirmCheckout(){
    //COMPLETE THIS FUNCTION
    // This function toggles the paypal overlay
    if(this.isTermsAccepted)
    {
    this.affirm = !this.affirm;
    }
  }
  termsFunc(){
    //COMPLETE THIS FUNCTION
    //This function is ran when a user selects the final sale checkbox
    this.isTermsAccepted = !this.isTermsAccepted;
  }
  alertUser(){ 
    if(this.isTermsAccepted==false)
    {
    alert("Please check the terms to proceed");
    }
  }    
}
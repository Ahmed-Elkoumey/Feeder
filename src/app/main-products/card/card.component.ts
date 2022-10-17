import { Component, OnInit,Input } from '@angular/core';
import { ProductType } from 'src/app/interface/product-type';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faBasketShopping,faHeart } from '@fortawesome/free-solid-svg-icons';
import { CuonterService } from 'src/app/services/cuonter.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {



  faMagnifyingGlass=faMagnifyingGlass;
  faBasketShopping=faBasketShopping;
  faHeart=faHeart

  @Input() card : ProductType ={
    "createdAt":"",
    "name":"",
    "image":"",
    "rate":0,
    "count":0,
    "description":"",
    "price":"",
    "reviews":[
    ],
    "id":"0"
  }



  constructor(private router:Router ,private cart:CuonterService) { }

  ngOnInit(): void {
  }


  getDetails(){
    this.router.navigate(['/cardDetails', this.card.id])
  }

  pushToCart(product:ProductType){
this.cart.addToCart(product);

  }

  addToWishList(product:ProductType){
    this.cart.addToCartWish(product);
   }

}

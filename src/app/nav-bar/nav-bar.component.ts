import { Component, OnInit } from '@angular/core';
import { faShoppingBasket,faHeart } from '@fortawesome/free-solid-svg-icons';
import { CuonterService } from '../services/cuonter.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private numbers:CuonterService) { 

  }

  cartItems :any =  this.numbers.cartItemList.length;
  
  faShoppingBasket=faShoppingBasket;
  faHeart=faHeart;
  ngOnInit(): void {
  }

}

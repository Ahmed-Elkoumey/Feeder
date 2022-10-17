import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CuonterService } from '../services/cuonter.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productDetails: any = [];
  total: number = 0;

  price = this.productDetails.price + this.productDetails.price
  faTrash=faTrash;
  faMagnifyingGlass=faMagnifyingGlass;
  constructor(private cart :CuonterService,private router:Router) { }

  ngDoCheck(): void {
    this.total=0;
    this.getTotalPrice()
  }


// ─────────────────────────────────────────────────────────────────────────────
// remove 
removeItem(product: any) {
  this.cart.removeFromCart(product);
}

// ─────────────────────────────────────────────────────────────────────────────
// remove all 
removeAllItems() {
  this.cart.removeCart();
}

// ─────────────────────────────────────────────────────────────────────────────
// get productds

ngOnInit(): void {
  this.cart.getProducts().subscribe((res) => {
    this.productDetails = res;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// increament
increaseCounter(index: number) {
  this.productDetails[index].quantity++;
}
// ─────────────────────────────────────────────────────────────────────────────
// decrement

decreaseCounter(index: number) {
  if (this.productDetails[index].quantity - 1 < 1) {
    this.productDetails[index].quantity = 1;
  } else {
    this.productDetails[index].quantity--;
  }
}
// ─────────────────────────────────────────────────────────────────────────────
// get Total

getTotalPrice() {
  for (let i = 0; i < this.productDetails.length; i++) {
    let price =
      this.productDetails[i].price * this.productDetails[i].quantity;
    this.total += price;
  }
}


getDetails(id:any){
  this.router.navigate(['/cardDetails', id ])
}


}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ProductType } from '../interface/product-type';
import { CuonterService } from '../services/cuonter.service';
import { removeItem } from '../store/wish.action';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
 
  wishDetails: any = [];
  total: number = 0;

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
  this.cart.removeFromCartWish(product);
  console.log("remove");
}

// ─────────────────────────────────────────────────────────────────────────────
// remove all 
removeAllItems(product:any) {
  this.cart.removeFromCartWish(product);
}

// ─────────────────────────────────────────────────────────────────────────────
// get productds

ngOnInit(): void {
  this.cart.getProductsWish().subscribe((res) => {
    this.wishDetails = res;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// increament
increaseCounter(index: number) {
  this.wishDetails[index].quantity++;
}
// ─────────────────────────────────────────────────────────────────────────────
// decrement

decreaseCounter(index: number) {
  if (this.wishDetails[index].quantity - 1 < 1) {
    this.wishDetails[index].quantity = 1;
  } else {
    this.wishDetails[index].quantity--;
  }
}
// ─────────────────────────────────────────────────────────────────────────────
// get Total

getTotalPrice() {
  for (let i = 0; i < this.wishDetails.length; i++) {
    let price =
      this.wishDetails[i].price * this.wishDetails[i].quantity;
    this.total += price;
  }
}


getDetails(id:any){
  this.router.navigate(['/cardDetails', id ])
}
}

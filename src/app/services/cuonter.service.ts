import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CuonterService {
  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);
  
  wishListItem: any = [];
  wishList = new BehaviorSubject<any>([]);

  constructor() {}
  //get
  getProducts() {
    return this.productList.asObservable();
  }
  // set
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  // ─────────────────────────────────────────────────────────────────────────────
// for wish List
 //get
 getProductsWish() {
  return this.wishList.asObservable();
}
// set
setProductWish(product: any) {
  this.wishListItem.push(...product);
  this.wishList.next(product);
}

  // ─────────────────────────────────────────────────────────────────────────────
  //add
  addToCart(product: any) {
    let result = this.cartItemList.find(
      (item: { id: any }) => item.id === product.id
    );

    if (result) {
      product.quantity++;
    } else {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    }
  }

  // ─────────────────────────────────────────────────────────────────────────────
//for wish
addToCartWish(product: any) {
  let result = this.wishListItem.find(
    (item: { id: any }) => item.id === product.id
  );

  if (result) {
    product.quantity++;
  } else {
    this.wishListItem.push(product);
    this.wishList.next(this.cartItemList);
  }
} 

  // ─────────────────────────────────────────────────────────────────────────────
  // remove
  removeFromCart(product: any) {
    this.cartItemList.map((e: any, i: any) => {
      if (product.id === e.id) {
        this.cartItemList.splice(i, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }

// ─────────────────────────────────────────────────────────────────────────────
// for wish list

removeFromCartWish(product: any) {
  this.wishListItem.map((e: any, i: any) => {
    if (product.id === e.id) {
      this.wishListItem.splice(i, 1);
    }
  });
  this.wishList.next(this.cartItemList);
}


  // ─────────────────────────────────────────────────────────────────────────────
  // remove All

  removeCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}

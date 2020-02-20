import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingCart: Map<string, Object>;
  constructor() {
    this.shoppingCart = new Map();
  }

  public addItem(item) {
    this.shoppingCart.set(item.id, item);
  }

  public removeItem(id) {
    this.shoppingCart.delete(id);
  }
}

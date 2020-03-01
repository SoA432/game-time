import { Injectable } from '@angular/core';
import { GameInterface } from '../models/game.interface';
import { CartItemInterface } from '../models/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public shoppingCart: CartItemInterface[] = [];
  public totalItemsQuantity: number = 0;
  public totalPrice: number = 0;
  constructor() {
  }

  public addItem(game: GameInterface) {
    const found = this.shoppingCart.find(cartItem => cartItem.game.id === game.id);
    if (found) {
      this.shoppingCart.forEach(cartItem => {
        if (cartItem.game.id === game.id) {
          cartItem.quantity++;
        }
      });
    } else {
      this.shoppingCart.push({game, quantity: 1});
    }
    this.getTotalItemsQuantity();
  }

  public removeItem(id) {
    this.shoppingCart = this.shoppingCart.filter(item => item.game.id !== id);
    this.getTotalItemsQuantity();
  }

  public incrementQuantity(id) {
    const cartItem = this.shoppingCart.find(item => item.game.id === id);
    cartItem.quantity++;
    this.getTotalItemsQuantity();
  }

  public decrementQuantity(id) {
    const cartItem = this.shoppingCart.find(item => item.game.id === id);
    cartItem.quantity--;
    this.getTotalItemsQuantity();
  }

  public getTotalItemsQuantity() {
    this.totalItemsQuantity = 0;
    this.totalPrice = 0;
    this.shoppingCart.forEach(item => {
      this.totalPrice += item.quantity * item.game.price;
      this.totalItemsQuantity += item.quantity;
    });
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart:  Map<string, Object>;
  @ViewChild('input') input: ElementRef;
  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.shoppingCart = this.cartService.shoppingCart;
  }

  public onChange(e, item) {
    console.log(e.target.value);
  }

  public incrementQuantity(item) {
    console.log(this.input.nativeElement);
  }

  public decrementQuantity(item) {
    console.log(this.input.nativeElement);
  }
}

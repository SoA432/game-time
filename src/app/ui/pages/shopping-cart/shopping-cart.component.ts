import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { FormControl } from '@angular/forms';
import { GameInterface } from '../../../core/models/game.interface';
import { CartItemInterface } from '../../../core/models/cart-item.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { OrderComponent } from '../../modals/order/order.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(public cartService: CartService,
              private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  public incrementQuantity(item: CartItemInterface) {
    this.cartService.incrementQuantity(item.game.id);
  }

  public decrementQuantity(item: CartItemInterface) {
    item.quantity > 1 ? this.cartService.decrementQuantity(item.game.id) : this.cartService.removeItem(item.game.id);
  }

  public removeItem(item: CartItemInterface) {
    this.cartService.removeItem(item.game.id);
  }

  public onChange(value: number, item: CartItemInterface) {
    if (value && value <= 0) {
      this.removeItem(item);
    }
  }

  public openOrderModal() {
    this.bsModalRef = this.modalService.show(OrderComponent, { class: 'checkout-modal' });
  }
}

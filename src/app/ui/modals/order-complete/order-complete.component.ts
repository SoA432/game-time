import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit, OnDestroy {
  title: string;
  closeBtnName: string;
  text: string;
  greeting: string;

  constructor(public bsModalRef: BsModalRef, public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  public closeModal() {
    this.bsModalRef.hide();
  }

  ngOnDestroy() {
    this.router.navigate(['/']).then(() => this.cartService.clear());
  }

}

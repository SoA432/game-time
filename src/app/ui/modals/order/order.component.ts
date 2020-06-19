import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderCompleteComponent } from '../order-complete/order-complete.component';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  checkoutForm: FormGroup;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  phoneCtrl: FormControl;
  emailCtrl: FormControl;
  ccNumberCtrl: FormControl;
  ccExpCtrl: FormControl;
  ccCvvCtrl: FormControl;
  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService, public cartService: CartService) { }

  ngOnInit(): void {
    this.firstNameCtrl = new FormControl('', [Validators.required]);
    this.lastNameCtrl = new FormControl('', [Validators.required]);
    this.emailCtrl = new FormControl('', [Validators.required]);
    this.phoneCtrl = new FormControl(null, [Validators.required]);
    this.ccNumberCtrl = new FormControl(null, [Validators.required, Validators.min(1000000000000000)]);
    this.ccExpCtrl = new FormControl(null, [Validators.required]);
    this.ccCvvCtrl = new FormControl(null, [Validators.required]);

    this.checkoutForm = new FormGroup({
      firstNameCtrl: this.firstNameCtrl,
      lastNameCtrl: this.lastNameCtrl,
      emailCtrl: this.emailCtrl,
      ccNumberCtrl: this.ccNumberCtrl,
      ccExpCtrl: this.ccExpCtrl,
      ccCvvCtrl: this.ccCvvCtrl,
    });
  }

  public closeModal() {
    this.bsModalRef.hide();
    this.openOrderModal();
  }

  public openOrderModal() {
    const initialState = {
      title: 'Уважаемый, пользователь!',
      text: `Ваш заказ ${Math.random() * (999999 - 100000) + 100000} находится в статусе Обработки. На вашу электронную почту было отправлено письмо с подробностями.`,
      greeting: 'Спасибо, что выбираете нас!',
      closeBtnName: 'Вернуться на сайт',
    };
    this.bsModalRef = this.modalService.show(OrderCompleteComponent, { initialState });
  }

}

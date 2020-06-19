import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {
  title: string;
  closeBtnName: string;
  text: string;
  greeting: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  public closeModal() {
    this.bsModalRef.hide();
  }

}

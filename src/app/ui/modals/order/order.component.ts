import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
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

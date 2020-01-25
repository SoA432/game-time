import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  mockData = {
      imageSrc: '/assets/witcher.jpg',
      title: 'The Witcher 3: Wild Hunt',
      price: '15'
    };

  constructor() {
  }

  ngOnInit() {
  }

}

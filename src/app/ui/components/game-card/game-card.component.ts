import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() mockData = {
      imageSrc: '/assets/images/witcher3.png',
      title: 'The Witcher 3: Wild Hunt',
      price: '15'
    };

  constructor() {
  }

  ngOnInit() {
  }

}

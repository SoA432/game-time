import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-detail-page',
  templateUrl: './game-detail-page.component.html',
  styleUrls: ['./game-detail-page.component.scss']
})
export class GameDetailPageComponent implements OnInit {

  public mockGame = {
    title: 'Vikings: wolf blabla',
    shortDescription: 'some short decriothjkfsa hfjkasl fkhjsakf kjas',
    description: 'lorem ipsum fsafs lorem ipsum lorem ipsum ' +
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    score: 3.3,
    rating: 'R',
    price: 59.99
  };
  constructor() { }

  ngOnInit() {
  }

}

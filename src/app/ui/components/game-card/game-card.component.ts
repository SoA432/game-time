import { Component, Input, OnInit } from '@angular/core';
import { GameInterface } from '../../../core/models/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: GameInterface;

  constructor() {
  }

  ngOnInit() {
  }

}

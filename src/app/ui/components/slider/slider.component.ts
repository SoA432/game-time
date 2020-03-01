import { Component, Input, OnInit } from '@angular/core';
import { GameInterface } from '../../../core/models/game.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() gallery: Array<string>;
  @Input() games: GameInterface[];

  constructor(private router: Router) {
  }

  public sliderInterval = 5000;
  public slides = ['assets/images/diablo3.jpg', 'assets/images/ori.jpg', 'assets/images/witcher3.png'];

  ngOnInit() {
    if (this.gallery) {
      this.slides = this.gallery;
    }
    if (this.games) {
      this.slides = this.games.map((game: GameInterface) => game.imgSrc);
    }

    console.log(this.slides);
  }

  public openGame(imgSrc) {
    if (this.games) {
      const slideGame = this.games.find((game: GameInterface) => game.imgSrc === imgSrc);
      this.router.navigate([`/detail/${slideGame.id}`]);
    }
  }

}

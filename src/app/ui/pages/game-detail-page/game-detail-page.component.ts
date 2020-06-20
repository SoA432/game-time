import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { GameInterface } from '../../../core/models/game.interface';
import { CartService } from '../../../core/services/cart.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-game-detail-page',
  templateUrl: './game-detail-page.component.html',
  styleUrls: ['./game-detail-page.component.scss']
})
export class GameDetailPageComponent implements OnInit {
  public game: GameInterface;
  public activeTab: number = 1;
  public suggestionGames: GameInterface[] = [];
  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.route.data.subscribe((resolver: {game: GameInterface}) => {
      this.game = resolver.game;
    }, err => console.log(err));

    this.apiService.getAllGames()
      .subscribe((games: GameInterface[]) => {
        this.suggestionGames = games.sort((a, b) => 0.5 - Math.random()).slice(0, 10);
    });
  }

  public activateTab(index: number) {
    this.activeTab = index;
  }

  public addToCart() {
    this.cartService.addItem(this.game);
  }

}

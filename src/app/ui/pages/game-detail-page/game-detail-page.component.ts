import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { GameInterface } from '../../../core/models/game.interface';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-game-detail-page',
  templateUrl: './game-detail-page.component.html',
  styleUrls: ['./game-detail-page.component.scss']
})
export class GameDetailPageComponent implements OnInit {
  public game: GameInterface;
  // public mockGame = {
  //   title: 'Vikings - Wolves of Midgard',
  //   genre: 'Ролевые игры',
  //   description: 'Бойтесь волков. Их кровь холодна, их снедает голод — они пойдут на все, чтобы выжить. Рагнарёк. ' +
  //     'Легенда гласит: когда землю охватит самая холодная зима, йотуны вернутся вершить месть богам Асгарда. Кажется, ' +
  //     'что гибель мира неминуема, и судьба Мидгарда висит на волоске. Но едва огненные и морозные великаны объединяются ' +
  //     'в одно грозное войско, как перед ними встает клан Ульфунг — «Волки Мидгарда». Нашумевшие викинги-изгои, которых ' +
  //     'не сломил даже кровавый разбой в родной деревне, полны решимости взять судьбу в свои руки и спасти мир. ' +
  //     'Вы вождь этого клана. Вам предстоит предотвратить уничтожение Мидгарда и возглавить атаку на злодеев во время ' +
  //     'трехлетней зимы. Ролевой боевик Vikings – Wolves of Midgard перенесет вас на Берега Мидгарда, где мифология и ' +
  //     'история викингов переплелись с фэнтези. Сражайтесь с ужасными йотунами, ордами чудовищных живых мертвецов и тварями ' +
  //     'Рагнарока и не поддавайтесь всепроникающему холоду, который вот-вот навеки истребит все живое. Осваивайте мощное оружие, ' +
  //     'в том числе мечи и щиты, двуручные молоты, парные топоры и быстрые луки. Проливайте кровь в бою и подносите ее богам, ' +
  //     'чтобы получать и усиливать разрушительные заклятья. У вас много возможностей для развития!',
  //   rating: 3.5,
  //   price: 59.99
  // };
  public gameId: string;
  public activeTab: number = 1;
  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.gameId = this.route.snapshot.params['id'];
    this.game = this.apiService.getGameById(this.gameId);
  }

  public activateTab(index: number) {
    this.activeTab = index;
  }

  public addToCart() {
    this.cartService.addItem(this.game);
  }

}

import { Injectable } from '@angular/core';
import { GameInterface } from '../models/game.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  mockGames: GameInterface[] = [];

  constructor() {
    const witcher: GameInterface = {
      id: '1',
      imgSrc: '/assets/images/witcher3.png',
      title: 'Vikings - Wolves of Midgard',
      genre: 'Ролевые игры',
      description: 'Бойтесь волков. Их кровь холодна, их снедает голод — они пойдут на все, чтобы выжить. Рагнарёк. ' +
        'Легенда гласит: когда землю охватит самая холодная зима, йотуны вернутся вершить месть богам Асгарда. Кажется, ' +
        'что гибель мира неминуема, и судьба Мидгарда висит на волоске. Но едва огненные и морозные великаны объединяются ' +
        'в одно грозное войско, как перед ними встает клан Ульфунг — «Волки Мидгарда». Нашумевшие викинги-изгои, которых ' +
        'не сломил даже кровавый разбой в родной деревне, полны решимости взять судьбу в свои руки и спасти мир. ' +
        'Вы вождь этого клана. Вам предстоит предотвратить уничтожение Мидгарда и возглавить атаку на злодеев во время ' +
        'трехлетней зимы. Ролевой боевик Vikings – Wolves of Midgard перенесет вас на Берега Мидгарда, где мифология и ' +
        'история викингов переплелись с фэнтези. Сражайтесь с ужасными йотунами, ордами чудовищных живых мертвецов и тварями ' +
        'Рагнарока и не поддавайтесь всепроникающему холоду, который вот-вот навеки истребит все живое. Осваивайте мощное оружие, ' +
        'в том числе мечи и щиты, двуручные молоты, парные топоры и быстрые луки. Проливайте кровь в бою и подносите ее богам, ' +
        'чтобы получать и усиливать разрушительные заклятья. У вас много возможностей для развития!',
      rating: 3.5,
      price: 20,
      gallery: [
        'https://steamcdn-a.akamaihd.net/steam/apps/355880/ss_1c2bd33b403f8fde95095909c9db883f39676b26.1920x1080.jpg?t=1548252605',
        'https://3dnews.ru/assets/external/illustrations/2019/12/30/1000660/3.jpg',
        'https://images.unian.net/photos/2020_01/1577977009-8590.jpg?0.3510911240101837'
      ]
    };
    const ori: GameInterface = {
      id: '2',
      imgSrc: '/assets/images/ori.jpg',
      title: 'Ori and the Blind Forest',
      genre: 'Action',
      description: 'jnkerlmfw;dnbkjnvlsda',
      rating: 4.4,
      price: 30,
      gallery: [
        'https://c.dns-shop.ru/thumb/st4/fit/800/650/cb42187aa428e59e4b69297db96b977c/8a904b686c216a68784b8573a18631e7ca77b993e13247bb0d079a553d821006.jpg',
        'https://rampaga.ru/_sf/190/03417265.jpg',
        'https://u.kanobu.ru/screenshots/14/78683782-ff94-4f57-a3f5-0b700fbbee80.jpg'
      ]
    };

    const diablo: GameInterface = {
      id: '3',
      imgSrc: '/assets/images/diablo3.jpg',
      title: 'Diablo III',
      genre: 'RPG',
      description: 'jnkerlmfw;dnbkjnvlsda',
      rating: 4.9,
      price: 60,
      gallery: [
        'https://cs8.pikabu.ru/post_img/big/2018/03/15/9/1521128659194378786.jpg',
        'https://cs9.pikabu.ru/post_img/big/2018/03/15/9/1521128687181391655.jpg',
        'https://www.diabloii.net/gallery/data/510/medium/the_barbarian_class_by_darkgeometryart-d2yon43.jpg',
        'https://cdn.shopify.com/s/files/1/0942/1228/products/slW2JRT.jpeg?v=1438889755',
      ]
    };
    this.mockGames.push(witcher, ori, diablo);
  }

  public getAllGames(): GameInterface[] {
    return this.mockGames;
  }

  public getGameById(id: string): GameInterface {
    return this.mockGames.find(game => game.id === id);
  }
}

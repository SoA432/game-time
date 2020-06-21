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
  public comments = [];
  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private cartService: CartService) {
  }

  ngOnInit() {

    this.comments = [
      {
        name: 'Joni Voyager',
        date: '24.03.2020',
        title: 'Рекомендую',
        description: 'Хорошая игра в который не скучно. ДЕЛАЙТЕ ТАКИЕ ЧАЩЕ!!!'
      },
      {
        name: 'Shtrayzer',
        date: '28.03.2020',
        title: 'ЭКСКЛЮЗИВНЫЙ ЭКСПИРЕАНС',
        description: 'С другом играем по локалке,сидя вдвом на диване,действуя сообща, получая огромное удовольствие от сюжета, сопереживания героям и графике.'
      },
      {
        name: 'Marta',
        date: '21.04.2020',
        title: 'Хорошая игра',
        description: 'Это крутейшая игра. Отличный сюжет, классные миссии, куча всевозможных внутриигровых занятий, пасхалки, перестрелки, погони, запоминающиеся персонажи, великолепная графика.'
      },
      {
        name: 'Jim',
        date: '02.03.2019',
        title: 'Супер игра',
        description: 'Интересная задумка, хорошая музыка в игре, она стоит того, чтобы в нее сыграть еще раз.'
      },
      {
        name: 'Dron',
        date: '12.05.2019',
        title: 'Игра понравилась',
        description: 'Неплохая одиночная кампания и впечатляющий мультиплеер.'
      },
      {
        name: 'Marsik',
        date: '05.06.2020',
        title: 'Игра хорошая, но…',
        description: 'Апогей серии, лучшая часть, отличная графика, достаточно неплохой сюжет и интересные персонажи. Выжимает все из древних консолей. Одно "НО": после прохождения лично мне играть было уже не так интересно.'
      },
      {
        name: 'Juja',
        date: '02.02.2020',
        title: 'Прекрасно',
        description: 'Это самая лучшая игра в которую мне когда либо приходилось играть. И да, это однозначно лучшая игра года. Если у Вас есть ещё хоть какие-то сомнения покупать, играть ли в эту игру, выбросьте их на помойку, потому что в игру с таким потрясающим сюжетом Вы ещё никогда не играли. В ней есть абсолютно всё, что нравиться большинству любителей жанра.'
      },
      {
        name: 'Mo4og',
        date: '03.05.2020',
        title: 'Класс',
        description: 'Геймплей хорош, основная сюжетная линия удалась на славу, дополнительные задания не дают заскучать.'
      },
      {
        name: 'Daria',
        date: '11.08.2019',
        title: 'Лучшая',
        description: 'Атмосфера завораживает . Сейчас прохожу 3 раз , но не надоедает , т.к. с каждым разом замечаешь что-то новое. Геймплей шедевральный. Реально волнуешься за главного героя . По 10-тибальной шкале поставил бы 12 . Ну а с теми , кто не влюбился в эту игру спорить не буду - у всех свои вкусы . Как на музыку и фильмы, так и на игры . 12/10.'
      },
      {
        name: 'TomTom',
        date: '29.09.2019',
        title: 'Годная',
        description: 'Несмотря на неоднозначные отзывы от игроков, игра вышла не идеальной, но хорошей. Проработанные персонажи, сюжет с намеком на эпичность, куча всяких играбельных мелочей и возможностей, так же есть и недочеты, но они простительны.'
      },
    ].sort((a, b) => 0.5 - Math.random()).slice(0, 3);

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

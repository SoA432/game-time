import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { GameInterface } from '../../../core/models/game.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sortingOptions = [
    {
      name: 'Название A-Z',
      active: true,
      type: 'asc'
    },
    {
      name: 'Название Z-A',
      active: false,
      type: 'desc'
    },
    {
      name: 'Высокий рейтинг',
      active: false,
      type: 'ascRating'
    },
    {
      name: 'Низкий рейтинг',
      active: false,
      type: 'descRating'
    }
  ]

  public sortingByGenre = [
    {
      name: 'action',
      active: false,
      type: 'action'
    },
    {
      name: 'fighting',
      active: false,
      type: 'fighting'
    },
    {
      name: 'indie',
      active: false,
      type: 'indie'
    },
    {
      name: 'shooter',
      active: false,
      type: 'shooter'
    },
    {
      name: 'rpg',
      active: false,
      type: 'rpg'
    }
  ];

  public sortingByYear = [
    {
      name: '2015',
      active: false,
      type: '2015'
    },
    {
      name: '2016',
      active: false,
      type: '2016'
    },
    {
      name: '2017',
      active: false,
      type: '2017'
    },
    {
      name: '2018',
      active: false,
      type: '2018'
    },
    {
      name: '2019',
      active: false,
      type: '2019'
    },
    {
      name: '2020',
      active: false,
      type: '20202020'
    }
  ];

  public sortingByPrice = [
    {
      name: 'до 500 грн',
      active: false,
      type: 'below500'
    },
    {
      name: 'От 500 грн до 1000 грн',
      active: false,
      type: 'between500and1000'
    },
    {
      name: 'Более 1000 грн',
      active: false,
      type: 'above1000'
    },
  ];


  public games = [];
  public sliderGames = [];
  public activeFilters = {
    main: 'asc',
    genre: [],
    year: [],
    price: []
  }
  constructor(private apiService: ApiService, private changeDetector: ChangeDetectorRef, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((resolver: {games: GameInterface[]}) => {
      this.games = resolver.games;
      this.sliderGames = resolver.games;
      if (resolver.games.length > 5) {
        this.sliderGames = this.sliderGames.slice(0, 5);
      }
      this.changeDetector.detectChanges();
    }, err => console.log(err));
  }

  applyNewFilters(list, type) {
    console.log('list', list, 'type', type)
    switch(type) {
      case 'main': 
        this.activeFilters.main = list;
        break;
      case 'genre': 
        this.activeFilters.genre = list;
        break;
      case 'price': 
      this.activeFilters.price = list;
        break;
      case 'year': 
      this.activeFilters.year = list;
        break;
      default: 
        break;
    }

    console.log(this.activeFilters);
  }

}

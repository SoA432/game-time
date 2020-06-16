import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { GameInterface } from '../../../core/models/game.interface';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

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
      type: 'descRating'
    },
    {
      name: 'Низкий рейтинг',
      active: false,
      type: 'ascRating'
    }
  ]

  public sortingByGenre = [
    {
      name: 'Экшн и приключения',
      active: false,
      type: 'Экшн и приключения'
    },
    {
      name: 'Стрелялки',
      active: false,
      type: 'Стрелялки'
    },
    {
      name: 'Борьба',
      active: false,
      type: 'Борьба'
    },
    {
      name: 'Ролевые игры',
      active: false,
      type: 'Ролевые игры'
    },
    {
      name: 'Спорт',
      active: false,
      type: 'Спорт'
    },
    {
      name: 'Симуляторы',
      active: false,
      type: 'Симуляторы'
    },
    {
      name: 'Стратегии',
      active: false,
      type: 'Стратегии'
    },
    {
      name: 'Гонки и авиасимуляторы',
      active: false,
      type: 'Гонки и авиасимуляторы'
    },
    {
      name: 'Другие',
      active: false,
      type: 'Другие'
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
      type: '2020'
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
  public filteredGames = [];
  public sliderGames = [];
  public gamesType = 'all';
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
      this.filteredGames = resolver.games;
      this.sortGames('asc');
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

    this.filteredGames = this.games;
    this.activateFilters(this.activeFilters)
  }

  activateFilters(filters: any): void {
    if (filters.genre.length) {
      this.filteredGames = this.filteredGames.filter((game: GameInterface) => {
        return filters.genre.includes(game.genre)
      })
    }

    if (filters.year.length) {
      this.filteredGames = this.filteredGames.filter((game: GameInterface) => {
        return filters.year.includes(new Date(game.date).getFullYear().toString())
      })
    }

    if (filters.price.length) {
      this.filteredGames = this.filteredGames.filter((game: GameInterface) => {
        let priceType = '';
        if (game.price < 500) {
          priceType = 'below500'
        }
        if (game.price >= 500 && game.price < 1000) {
          priceType = 'between500and1000'
        }
        if (game.price > 1000) {
          priceType = 'above1000'
        }
        return filters.price.includes(priceType)
      })
    }

    this.sortGames(filters.main)
  }

  sortGames(sort) {
    switch (sort) {
      case 'asc':
        this.filteredGames = this.filteredGames.sort(this.compareAsc)
        break;
      case 'desc':
        this.filteredGames = this.filteredGames.sort(this.compareDesc)
        break;
      case 'ascRating':
        this.filteredGames = this.filteredGames.sort(this.compareRatingAsc)
        this.filteredGames.forEach(game => console.log(game.rating))
        break;
      case 'descRating':
        this.filteredGames = this.filteredGames.sort(this.compareRatingDesc)
        this.filteredGames.forEach(game => console.log(game.rating))
        break;
      default:
        break;
    }
  }

  selectGamesType(type: string) {
    this.gamesType = type;
    switch (type) {
      case 'all':
        this.filteredGames = this.games;
        this.activateFilters(this.activeFilters)
        break;
      case 'soon':
        this.filteredGames.filter((game: GameInterface) => {
          // todo: complete logic
          // return game.date >= new Date()
          return true
        })
        break;
      case 'sub':
        this.filteredGames.filter((game: GameInterface) => {
          return game.category === 'subscription';
        })
        break;
      case 'sale':
        this.filteredGames.filter((game: GameInterface) => {
          return game.price > game.discountPrice;
        })
        break;
      default:
        break;
    }
  }

  compareAsc(a, b): number {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  }

  compareDesc(a, b): number {
    if (a.title < b.title) {
      return 1;
    } else if (a.title > b.title) {
      return -1;
    } else {
      return 0;
    }
  }

  compareRatingAsc(a, b): number {
    if (a.rating > b.rating) {
      return 1;
    } else if (a.rating < b.rating) {
      return -1;
    } else {
      return 0;
    }
  }

  compareRatingDesc(a, b): number {
    if (a.rating < b.rating) {
      return 1;
    } else if (a.rating > b.rating) {
      return -1;
    } else {
      return 0;
    }
  }

}

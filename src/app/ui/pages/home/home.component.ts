import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public filterList = [
    {
      name: 'action',
      active: false,
    },
    {
      name: 'fighting',
      active: false,
    },
    {
      name: 'indie',
      active: false,
    },
    {
      name: 'shooter',
      active: false,
    },
    {
      name: 'rpg',
      active: false,
    }
  ];
  public filterList2 = [
    {
      name: '11',
      active: false,
    },
    {
      name: '22',
      active: false,
    },
    {
      name: '33',
      active: false,
    },
    {
      name: '44',
      active: false,
    },
    {
      name: '55',
      active: false,
    }
  ];
  public filterList3 = [
    {
      name: 'dgdsgd',
      active: false,
    },
    {
      name: 'bsvcsd',
      active: false,
    },
    {
      name: 'fsddas',
      active: false,
    },
    {
      name: 'gregre',
      active: false,
    },
    {
      name: 'gregr',
      active: false,
    }
  ];
  public filterList4 = [
    {
      name: 'action111',
      active: false,
    },
    {
      name: 'fighting222',
      active: false,
    },
    {
      name: 'indie333',
      active: false,
    },
  ];
  public filterList5 = [
    {
      name: 'actionzcdv',
      active: false,
    },
    {
      name: 'fightingbgvfds',
      active: false,
    }
  ];

  public games = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.games = this.apiService.getAllGames();
  }

}

import { Component, OnInit } from '@angular/core';

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
  constructor() {
  }

  ngOnInit() {
  }

}

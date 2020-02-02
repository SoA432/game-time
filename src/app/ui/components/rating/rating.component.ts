import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rate: number = 0;
  @Input() readonly: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

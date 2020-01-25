import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  public sliderInterval = 5000;
  public slides = [
    {
      src: 'assets/images/diablo3.jpg'
    },
    {
      src: 'assets/images/ori.jpg'
    },
    {
      src: 'assets/images/witcher3.png'
    }
  ];
  ngOnInit() {
  }

}

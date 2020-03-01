import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() gallery: Array<string>;
  constructor() { }
  public sliderInterval = 5000;
  public slides = ['assets/images/diablo3.jpg', 'assets/images/ori.jpg', 'assets/images/witcher3.png'];

  ngOnInit() {
    if (this.gallery) { this.slides = this.gallery; }
  }

}

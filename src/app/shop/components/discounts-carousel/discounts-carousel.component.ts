import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-discounts-carousel',
  templateUrl: './discounts-carousel.component.html',
  styleUrls: ['./discounts-carousel.component.scss'],
})
export class DiscountsCarouselComponent implements OnDestroy {
  activeSlide = 1;

  slidesAmount = 5;

  switchTime = 5000;

  intervalId;

  constructor() {
    this.intervalId = setInterval(() => this.next(), this.switchTime);
  }

  next() {
    if (this.activeSlide < this.slidesAmount) {
      this.activeSlide++;
    } else {
      this.activeSlide = 1;
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

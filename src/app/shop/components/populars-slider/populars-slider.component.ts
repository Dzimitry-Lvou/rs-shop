import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoodsModel } from 'src/app/core/models/goods.model';
import { GoodsService } from 'src/app/core/services/goods.service';
import { selectCategories } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-populars-slider',
  templateUrl: './populars-slider.component.html',
  styleUrls: ['./populars-slider.component.scss'],
})
export class PopularsSliderComponent implements OnInit {
  items: GoodsModel[] = [];

  pos = 0;

  step = 6;

  isMax = false;

  constructor(private goodsService: GoodsService, private store: Store) {}

  ngOnInit() {
    this.store.select(selectCategories).subscribe((cats) => {
      cats.forEach((cat) =>
        this.goodsService.getPopularByCategory(cat.id).subscribe((items) => {
          this.items = [...this.items, ...items];
        }),
      );
    });
  }

  onPrev() {
    if (this.pos < this.step) {
      this.pos = 0;
    } else {
      this.pos -= this.step;
    }
    this.isMax = false;
  }

  onNext() {
    if (this.pos + this.step > this.items.length - this.step) {
      this.pos = this.items.length - this.step;
      this.isMax = true;
    } else {
      this.pos += this.step;
    }
  }
}

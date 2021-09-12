import { Component, Input } from '@angular/core';
import { GoodsModel } from 'src/app/core/models/goods.model';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss'],
})
export class GoodsCardComponent {
  @Input() goodsItem!: GoodsModel;
}

import { Component, Input } from '@angular/core';
import { defaultItem, GoodsModel } from 'src/app/core/models/goods.model';

@Component({
  selector: 'app-populars-item',
  templateUrl: './populars-item.component.html',
  styleUrls: ['./populars-item.component.scss'],
})
export class PopularsItemComponent {
  @Input() goodsItem: GoodsModel = defaultItem;
}

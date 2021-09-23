import { Component, Input } from '@angular/core';
import { defaultItem, GoodsModel } from 'src/app/core/models/goods.model';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-favorites-card',
  templateUrl: './favorites-card.component.html',
  styleUrls: ['./favorites-card.component.scss'],
})
export class FavoritesCardComponent {
  @Input() itemId!: string;

  goodsItem: GoodsModel = defaultItem;

  constructor(private goodsService: GoodsService) {}

  ngOnInit() {
    this.goodsService.getGoodsById(this.itemId).subscribe((item) => (this.goodsItem = item));
  }
}

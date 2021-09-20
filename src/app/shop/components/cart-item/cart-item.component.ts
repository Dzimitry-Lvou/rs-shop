import { Component, Input, OnInit } from '@angular/core';
import { defaultItem, GoodsModel } from 'src/app/core/models/goods.model';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() itemId!: string;

  goodsItem: GoodsModel = defaultItem;

  amount = 1;

  constructor(private goodsService: GoodsService) {}

  ngOnInit() {
    this.goodsService.getGoodsById(this.itemId).subscribe((item) => (this.goodsItem = item));
  }

  onAdd() {
    if (this.amount < this.goodsItem.availableAmount) {
      this.amount++;
    }
  }

  onSubtract() {
    if (this.amount > 0) {
      this.amount--;
    }
  }
}
